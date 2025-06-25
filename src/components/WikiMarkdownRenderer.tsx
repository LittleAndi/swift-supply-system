
import React from 'react';

interface WikiMarkdownRendererProps {
  content: string;
}

const WikiMarkdownRenderer: React.FC<WikiMarkdownRendererProps> = ({ content }) => {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let inOrderedList = false;
    let inUnorderedList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        if (inOrderedList) {
          elements.push(
            <ol key={elements.length} className="list-decimal list-inside mb-4 ml-4 space-y-1">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInlineText(item) }} />
              ))}
            </ol>
          );
        } else if (inUnorderedList) {
          elements.push(
            <ul key={elements.length} className="list-disc list-inside mb-4 ml-4 space-y-1">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInlineText(item) }} />
              ))}
            </ul>
          );
        }
        listItems = [];
        inOrderedList = false;
        inUnorderedList = false;
      }
    };

    const formatInlineText = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm">$1</code>');
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine === '') {
        flushList();
        return;
      }

      // Headers
      if (trimmedLine.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-3xl font-bold mb-6 mt-8 first:mt-0">
            {trimmedLine.substring(2)}
          </h1>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-semibold mb-4 mt-6">
            {trimmedLine.substring(3)}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-medium mb-3 mt-4">
            {trimmedLine.substring(4)}
          </h3>
        );
      }
      // Ordered list
      else if (/^\d+\.\s/.test(trimmedLine)) {
        if (!inOrderedList) {
          flushList();
          inOrderedList = true;
        }
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ''));
      }
      // Unordered list
      else if (trimmedLine.startsWith('- ')) {
        if (!inUnorderedList) {
          flushList();
          inUnorderedList = true;
        }
        listItems.push(trimmedLine.substring(2));
      }
      // Regular paragraph
      else {
        flushList();
        elements.push(
          <p
            key={index}
            className="mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInlineText(trimmedLine) }}
          />
        );
      }
    });

    flushList(); // Flush any remaining list items

    return elements;
  };

  return <div className="prose prose-gray max-w-none">{parseMarkdown(content)}</div>;
};

export default WikiMarkdownRenderer;
