import Author from './Author';
import PostTitle from './PostTitle';

export default function PostHeader({ title, subtitle, date, author, image, imageUrl }) {
  return (
    <div className="post-header container">
      <PostTitle>{title}</PostTitle>
      <p className="post-subtitle">{subtitle}</p>
      <div className="post-info">
        <Author author={author.name} image={author.image} />
        <div className="date sp">{date}</div>
      </div>
      <div className="single-post-image">
        <img src={imageUrl} width="100%" alt={`Cover Image for ${title}`} />
      </div>
    </div>
  );
}
