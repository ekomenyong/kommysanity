
export default function Author({ author, image }) {
  return (
    <div className="author">
      <div className="author-img">
        <img src={image} alt={`${author}'s Author Image`} />
      </div>
      <p className="author-byline">
        <span className="author-name">{author}</span>&nbsp;&mdash;&nbsp;
      </p>
    </div>
  );
};
