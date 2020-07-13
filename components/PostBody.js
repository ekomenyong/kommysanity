import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import BlockContent from '@sanity/block-content-to-react';

export default function PostBody({ content }) {
  const serializers = {
    types: {
      code: ({ node: { language, code, filename } }) => {
        return (
          <>
            <SyntaxHighlighter language={language} style={dracula} className="post-code">
              {code}
            </SyntaxHighlighter>
            <div className="code-filename">{filename}</div>
          </>
        );
      }
    }
  };
  return (
    <div className="post-content">
      <BlockContent
        blocks={content}
        serializers={serializers}
        imageOptions={{ w: 900, h: 600, fit: 'max' }}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_DATASET_NAME} />
    </div>
  );
}
