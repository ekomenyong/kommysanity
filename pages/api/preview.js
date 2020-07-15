import { getAllPostsWithSlug } from 'components/lib/api';

export default async function enablePreview(req, res) {

  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const post = await getAllPostsWithSlug(req.query.slug, true);

  if (!post) {
    return res.status(401).json({ message: 'Invalid Slug!' });
  }
  // setPreviewData will set cookies into you browser
  // __prerender_bypass __next_preview_data
  res.setPreviewData({});
  res.writeHead(307, { Location: `/blog/${post.slug}` });
  res.end();
}
