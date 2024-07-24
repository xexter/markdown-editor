import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

const PreviewContainer = styled.div`
  width: 50%;
  padding: 20px;
  height: 100vh;
  overflow-y: scroll;
  border-left: 1px solid #ddd;
`;

const Preview = ({ markdown }) => {
  return (
    <PreviewContainer>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </PreviewContainer>
  );
};

export default Preview;
