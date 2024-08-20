import React, { useState } from 'react';
import { marked } from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const insertMarkdown = (syntax) => {
    setMarkdown(markdown + syntax);
  };

  return (
    <div className="flex justify-between p-5">
      <div className="w-1/2">
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Write your markdown here..."
          className="w-full h-96 p-3 border border-gray-300 rounded-md text-lg"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            onClick={() => insertMarkdown('# Heading 1\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Heading 1
          </button>
          <button
            onClick={() => insertMarkdown('## Heading 2\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Heading 2
          </button>
          <button
            onClick={() => insertMarkdown('**Bold Text**\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Bold
          </button>
          <button
            onClick={() => insertMarkdown('*Italic Text*\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Italic
          </button>
          <button
            onClick={() => insertMarkdown('---\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Horizontal Line
          </button>
          <button
            onClick={() => insertMarkdown('[Link](https://example.com)\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Link
          </button>
          <button
            onClick={() => insertMarkdown('![Image](https://via.placeholder.com/150)\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Image
          </button>
          <button
            onClick={() => insertMarkdown('| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1 | Cell 2 |\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Table
          </button>
          <button
            onClick={() => insertMarkdown('```\n// Code Block\n```\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Code Block
          </button>
          <button
            onClick={() => insertMarkdown('[^1]: Footnote text\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Footnote
          </button>
          <button
            onClick={() => insertMarkdown('~~Strikethrough~~\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Strikethrough
          </button>
          <button
            onClick={() => insertMarkdown('- [ ] Task item\n')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Task List
          </button>
        </div>
      </div>

      <div
        className="w-1/2 h-96 p-5 border border-gray-300 rounded-md bg-gray-50 overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownEditor;
