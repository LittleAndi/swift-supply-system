
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Book, FileText, Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import WikiMarkdownRenderer from './WikiMarkdownRenderer';

interface WikiPage {
  id: string;
  title: string;
  category: string;
  content: string;
  filename: string;
}

const wikiFileMap = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    category: 'Basics',
    filename: 'getting-started.md'
  },
  {
    id: 'procurement-guide',
    title: 'Procurement Management',
    category: 'Modules',
    filename: 'procurement-guide.md'
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    category: 'Modules',
    filename: 'shipment-tracking.md'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    category: 'Support',
    filename: 'troubleshooting.md'
  }
];

const WikiContent = () => {
  const [wikiPages, setWikiPages] = useState<WikiPage[]>([]);
  const [selectedPage, setSelectedPage] = useState<WikiPage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWikiPages = async () => {
      try {
        setLoading(true);
        const pages: WikiPage[] = [];
        
        for (const pageInfo of wikiFileMap) {
          try {
            const response = await fetch(`/wiki/${pageInfo.filename}`);
            if (!response.ok) {
              console.warn(`Failed to load ${pageInfo.filename}: ${response.status}`);
              continue;
            }
            const content = await response.text();
            pages.push({
              ...pageInfo,
              content
            });
          } catch (err) {
            console.warn(`Error loading ${pageInfo.filename}:`, err);
          }
        }
        
        if (pages.length === 0) {
          setError('No wiki pages could be loaded');
        } else {
          setWikiPages(pages);
          setSelectedPage(pages[0]);
          setError(null);
        }
      } catch (err) {
        setError('Failed to load wiki content');
        console.error('Error loading wiki pages:', err);
      } finally {
        setLoading(false);
      }
    };

    loadWikiPages();
  }, []);

  const filteredPages = wikiPages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(wikiPages.map(page => page.category))];

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading wiki content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Failed to load wiki</h3>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-4">
            <Book className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Wiki</h2>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search wiki..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-4">
            {categories.map(category => (
              <div key={category} className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  {category}
                </h3>
                <div className="space-y-1">
                  {filteredPages
                    .filter(page => page.category === category)
                    .map(page => (
                      <Button
                        key={page.id}
                        variant={selectedPage?.id === page.id ? "secondary" : "ghost"}
                        className="w-full justify-start h-auto p-3 text-left"
                        onClick={() => setSelectedPage(page)}
                      >
                        <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{page.title}</span>
                      </Button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedPage && (
          <>
            <div className="border-b bg-white px-6 py-4">
              <h1 className="text-2xl font-bold">{selectedPage.title}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Category: {selectedPage.category}
              </p>
            </div>
            
            <ScrollArea className="flex-1">
              <div className="p-6">
                <Card>
                  <CardContent className="p-6">
                    <WikiMarkdownRenderer content={selectedPage.content} />
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </>
        )}
      </div>
    </div>
  );
};

export default WikiContent;
