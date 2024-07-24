import React from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  width: 50%;
  height: 100vh;
  padding: 20px;
  border: none;
  resize: none;
  font-size: 1rem;
`;

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <TextArea
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
      placeholder="Enter Markdown here..."
    />
  );
};

export default Editor;
