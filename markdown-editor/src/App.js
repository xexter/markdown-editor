import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const downloadFile = () => {
    const element = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="app">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
        <div className="controls">
          <button onClick={downloadFile}>Download README.md</button>
          <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
            Toggle Theme
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
