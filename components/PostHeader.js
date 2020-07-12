import Author from './Author';
import PostTitle from './PostTitle';

export default function PostHeader({ title, date, author }) {
  return (
    <div className="post-header container">
      <PostTitle>{title}</PostTitle>
      <div className="post-info">
        <span className="date">{date}</span>
        <Author author={author.name} />

      </div>
    </div>
  );
}
