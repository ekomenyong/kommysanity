
export default function Author({ author }) {
  return (
    <p className="author-byline">
      Written by: <span className="author-name">{author}</span>
    </p>
  );
};
