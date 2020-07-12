import BlockContent from '@sanity/block-content-to-react';

export default function PostBody({ content }) {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    }
  };
  return (
    <div className="post-content">
      <BlockContent
        blocks={content}
        serializers={serializers}
        imageOptions={{ w: 700, h: 400, fit: 'max' }}
        projectId={process.env.SANITY_PROJECT_ID}
        dataset={process.env.SANITY_DATASET_NAME} />
    </div>
  );
}
