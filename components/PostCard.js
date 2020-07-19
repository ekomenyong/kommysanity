import Link from 'next/link';
import imageUrlFor from 'lib/imageUrlFor';

export default function PostCard({
  slug,
  title,
  category,
  excerpt,
  date,
  imageUrl,
}) {
  return (
    <Link as={`/blog/${slug}`} href="/blog/[slug]">
      <a><div className="post-card">
        <p className="category">{category}</p>
        <h2 className="post-title">{title}</h2>
        <p className="excerpt">{excerpt}</p>
        <span className="date">{date}</span>
      </div></a>
    </Link>
  );
}
