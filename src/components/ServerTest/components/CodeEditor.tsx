"use client"

import React, { useRef, useEffect, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { ViewUpdate } from '@codemirror/view';
import { Button } from '@nextui-org/react';
import { Play } from 'lucide-react';

interface CodeEditorProps {
  initialHtml: string;
  initialCss: string;
  onHtmlChange: (html: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialHtml,
  initialCss = "body {  }",
  onHtmlChange
}) => {
  const htmlEditorRef = useRef<HTMLDivElement>(null);
  const cssEditorRef = useRef<HTMLDivElement>(null);
  const [editorContent, setEditorContent] = useState({
    html: initialHtml,
    css: initialCss
  });
  const [previewContent, setPreviewContent] = useState({
    html: initialHtml,
    css: initialCss
  });
  const [isMobile, setIsMobile] = useState(false);

  const editorRefs = useRef<{
    html?: EditorView;
    css?: EditorView;
  }>({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const setupEditor = (
      ref: React.RefObject<HTMLDivElement>,
      language: any,
      initialValue: string,
      key: 'html' | 'css'
    ) => {
      if (!ref.current) return;

      // Clear any existing editor
      if (editorRefs.current[key]) {
        editorRefs.current[key]?.destroy();
      }

      // Create new editor
      editorRefs.current[key] = new EditorView({
        doc: initialValue,
        extensions: [
          basicSetup,
          language(),
          EditorView.updateListener.of((update: ViewUpdate) => {
            if (update.docChanged) {
              const newContent = update.state.doc.toString();
              setEditorContent(prev => ({
                ...prev,
                [key]: newContent
              }));
            }
          }),
          // Conditional theme with dynamic height
          EditorView.theme({
            "&": { height: isMobile ? "300px" : "600px" },
            ".cm-scroller": { overflow: "auto" },
            ".cm-content": { minHeight: "300px" },
            ".cm-focused": { outline: "none" }
          })
        ],
        parent: ref.current
      });
    };

    setupEditor(htmlEditorRef, html, initialHtml, 'html');
    setupEditor(cssEditorRef, css, initialCss, 'css');

    return () => {
      editorRefs.current.html?.destroy();
      editorRefs.current.css?.destroy();
    };
  }, [initialHtml, initialCss, isMobile]);

  const handleRunClick = () => {
    setPreviewContent(editorContent);
    onHtmlChange(editorContent.html);
  };

  const previewDocument = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${previewContent.css}</style>
      </head>
      <body>${previewContent.html}</body>
    </html>
  `;

  return (
    <div className="p-2 block md:flex flex-row justify-evenly">
      <div className="w-full md:w-[48%]">
        <h2 className="text-lg font-semibold">HTML Editor</h2>
        <div className="h-full">
          <div
            ref={htmlEditorRef}
            className={`border border-gray-300 rounded-sm mt-2 ${isMobile ? 'h-[300px]' : 'h-[600px]'}`}
          />
        </div>
      </div>
      <Button 
        className='absolute rounded-3xl p-0 text-white dark:text-dark'
        color="success" 
        endContent={<Play />}
        onClick={handleRunClick}
      >
        Run
      </Button>

      <div className="w-full md:w-[48%] mt-4 md:mt-0">
        <div className='flex justify-end w-full'>
          <h2 className="text-lg font-semibold">Live Preview</h2>
        </div>

        <div className={`border border-gray-300 rounded-sm mt-2 ${isMobile ? 'h-[300px]' : 'h-[600px]'} overflow-auto`}>
          <iframe
            srcDoc={previewDocument}
            className="w-full h-full border-none"
            title="Preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

