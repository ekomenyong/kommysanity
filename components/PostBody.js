import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlFor from 'lib/imageUrlFor';

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
      },
      image: ({ node: { asset, altText, caption } }) => {
        return (
          <div className="post-img">
            <img
              src={imageUrlFor(asset.url).width(900).height(500).fit('crop').url()}
              alt={altText}
            />
            <p className="img-caption">{caption}</p>
          </div>
        );
      }
    },
    marks: {
      internalLink: ({ mark, children }) => {
        const { slug = {} } = mark;
        const href = `/blog/${slug.current}`;
        return (<a href={href}>{children}</a>);
      },
      link: ({ mark, children }) => {
        const { blank, href } = mark;
        return (blank ?
          <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
          : <a href={href}>{children}</a>);
      }
    },
  };
  return (
    <div className="post-content">
      <BlockContent
        blocks={content}
        serializers={serializers}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_DATASET_NAME} />
    </div>
  );
}
