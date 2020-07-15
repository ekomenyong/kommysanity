import imageUrlFor from 'components/lib/imageUrlFor';

import Author from './Author';
import PostTitle from './PostTitle';

export default function PostHeader({ title, subtitle, date, author, category, imageUrl }) {
  return (
    <div className="post-header container">
      <div className="post-info">
        <Author author={author.name} image={author.image} />
        <div className="date sp">{date}</div>

      </div>
      <p className="post-category">{category}</p>
      <div className="post-title-box">
        <PostTitle>{title}</PostTitle>
        <p className="post-subtitle">{subtitle}</p>
      </div>
      <div className="single-post-image">
        <img
          src={imageUrlFor(imageUrl).width(1000).height(600).fit('crop').url()}
          alt={`Cover Image for ${title}`} />
      </div>
      <hr className="post-hr" />
    </div>
  );
}
