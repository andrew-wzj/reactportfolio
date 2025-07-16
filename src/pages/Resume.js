import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Resume = () => {
  const [markdown, setMarkdown] = useState('');
  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    // Fetch the markdown content from the public folder
    fetch('/resume.md')
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
        generateTableOfContents(text);
      })
      .catch(error => {
        console.error('Error loading resume content:', error);
        setMarkdown('# Error loading resume content');
      });
  }, []);

  const generateTableOfContents = (text) => {
    // Parse level-2 headings (##) to build Table of Contents
    const headingRegex = /^## (.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(text)) !== null) {
      const title = match[1];
      const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      headings.push({ title, id });
    }

    setTableOfContents(headings);
  };

  const addAnchorsToMarkdown = (text) => {
    // Add anchors to level-2 headings for navigation
    return text.replace(/^## (.+)$/gm, (match, title) => {
      const id = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return `## <a id="${id}"></a>${title}`;
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const processedMarkdown = addAnchorsToMarkdown(markdown);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Resume</h1>
      
      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '5px', 
          marginBottom: '30px' 
        }}>
          <h3 style={{ marginTop: '0', marginBottom: '15px' }}>Table of Contents</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {tableOfContents.map((item, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#007bff',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontSize: '16px',
                    padding: '0'
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Resume Content */}
      <div style={{ lineHeight: '1.6' }}>
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 style={{ 
                color: '#333', 
                borderBottom: '2px solid #007bff', 
                paddingBottom: '10px',
                marginBottom: '20px'
              }}>
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ 
                color: '#444', 
                marginTop: '30px', 
                marginBottom: '15px',
                fontSize: '1.5em'
              }}>
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ 
                color: '#555', 
                marginTop: '20px', 
                marginBottom: '10px',
                fontSize: '1.2em'
              }}>
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ marginBottom: '15px' }}>{children}</p>
            ),
            ul: ({ children }) => (
              <ul style={{ marginBottom: '15px', paddingLeft: '20px' }}>{children}</ul>
            ),
            li: ({ children }) => (
              <li style={{ marginBottom: '5px' }}>{children}</li>
            ),
            strong: ({ children }) => (
              <strong style={{ color: '#333' }}>{children}</strong>
            ),
            em: ({ children }) => (
              <em style={{ color: '#666' }}>{children}</em>
            ),
            a: ({ href, children }) => (
              <a 
                href={href} 
                style={{ color: '#007bff', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Resume;