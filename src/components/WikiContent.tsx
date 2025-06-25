
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Book, FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import WikiMarkdownRenderer from './WikiMarkdownRenderer';

// Sample wiki content - in a real app, this would come from markdown files
const wikiPages = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    category: 'Basics',
    content: `# Getting Started

Welcome to the Supply Chain Management platform! This guide will help you understand the core features and how to navigate the system.

## Overview

Our SCM platform provides comprehensive tools for:
- **Procurement Management**: Handle purchase orders and supplier relationships
- **Shipment Tracking**: Monitor goods movement across different transportation modes
- **Inventory Control**: Real-time inventory monitoring and management
- **Analytics**: Data-driven insights for supply chain optimization

## Quick Navigation

Use the sidebar to access different modules:
1. Dashboard - Overview of key metrics
2. Procurement - Manage suppliers and purchase orders
3. Shipments - Track shipments and delivery status
4. Inventory - Monitor stock levels and locations
5. Analytics - View performance metrics and trends

## Key Features

### Multi-Modal Transportation
Track shipments across different modes including:
- Sea freight
- Air cargo
- Rail transport
- Road delivery

### Real-Time Updates
Get instant notifications about:
- Shipment status changes
- Inventory alerts
- Procurement milestones
- Performance anomalies
`
  },
  {
    id: 'procurement-guide',
    title: 'Procurement Management',
    category: 'Modules',
    content: `# Procurement Management

Learn how to effectively manage your procurement process using our platform.

## Creating Purchase Orders

1. Navigate to the Procurement module
2. Click "Create New Order"
3. Select your supplier from the dropdown
4. Add items and quantities
5. Review and submit for approval

## Supplier Management

### Adding New Suppliers
- Go to Suppliers section
- Click "Add Supplier"
- Fill in company details and contact information
- Set payment terms and delivery preferences

### Supplier Performance
Monitor supplier performance through:
- On-time delivery rates
- Quality metrics
- Cost competitiveness
- Communication responsiveness

## Approval Workflows

Purchase orders follow these approval stages:
1. **Draft** - Initial creation
2. **Pending Approval** - Awaiting manager review
3. **Approved** - Ready for supplier submission
4. **Sent to Supplier** - Transmitted to supplier
5. **Confirmed** - Supplier acknowledgment received
`
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    category: 'Modules',
    content: `# Shipment Tracking

Master the art of shipment visibility and tracking across all transportation modes.

## Understanding Shipment Status

Our platform tracks shipments through various statuses:
- **In Transit** - Currently moving towards destination
- **At Port** - Awaiting customs clearance or next transport
- **Delivered** - Successfully reached final destination
- **Delayed** - Behind schedule with updated ETA
- **Exception** - Requires attention or intervention

## Multi-Modal Journey Visualization

Each shipment displays:
- **Journey Timeline** - Visual representation of the complete route
- **Current Location** - Real-time position updates
- **Transport Modes** - Sea, air, rail, and road segments
- **Milestone Tracking** - Key checkpoints and timestamps

## Container Information

For containerized shipments, view:
- Container numbers and types
- Seal information
- Cargo details
- Loading and unloading schedules

## Alerts and Notifications

Set up alerts for:
- Departure and arrival notifications
- Delay warnings
- Route deviations
- Customs clearance updates
- Final delivery confirmation
`
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    category: 'Support',
    content: `# Troubleshooting

Common issues and their solutions.

## Connection Issues

### Can't access the platform?
1. Check your internet connection
2. Verify the URL is correct
3. Clear browser cache and cookies
4. Try a different browser
5. Contact IT support if issues persist

## Data Loading Problems

### Shipments not displaying?
- Refresh the page
- Check if filters are applied
- Verify user permissions
- Contact system administrator

### Performance Issues
- Close unnecessary browser tabs
- Disable browser extensions temporarily
- Check network bandwidth
- Use recommended browsers (Chrome, Firefox, Safari)

## Permission Errors

If you cannot access certain features:
1. Verify your user role and permissions
2. Contact your system administrator
3. Check if your account is active
4. Ensure you're logged in with correct credentials

## Contact Support

For additional help:
- Email: support@scmplatform.com
- Phone: +1-800-SCM-HELP
- Live chat available 9 AM - 5 PM EST
`
  }
];

const WikiContent = () => {
  const [selectedPage, setSelectedPage] = useState(wikiPages[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = wikiPages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(wikiPages.map(page => page.category))];

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
                        variant={selectedPage.id === page.id ? "secondary" : "ghost"}
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
      </div>
    </div>
  );
};

export default WikiContent;
