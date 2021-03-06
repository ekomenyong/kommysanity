import client, { previewClient } from './sanity';

// Default post fields
const postFields = `
  name,
  title,
  subtitle,
  date,
  excerpt,
  'slug': slug.current,
  'featImage': featImage.asset->url,
  'author': author-> {
    name,
    'image': image.asset->url
  },
  'category': category-> { name },
`;

const getClient = preview => preview ? previewClient : client;



// Filter through posts to to make sure they
// have a unique slug
const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

// Grab all posts containing a slug
export async function getAllPostsWithSlug() {
  const data = await client.fetch(
    `*[_type == "post"] {
      'slug': slug.current
    }`
  );
  return data;
}

// Query all posts for the homepage
export async function getAllBlogsForHome(preview) {
  const data = await getClient(preview).fetch(
    `*[_type == "post"] | order(date desc) {
      ${postFields}
    }`
  );
  return getUniquePosts(data);
}


export async function getPostBySlug(slug, preview) {
  const currentClient = getClient(preview);
  const data = await currentClient
    .fetch(`*[_type == "post" && slug.current == $slug] {
      ${postFields}
      _updatedAt,
      body[]{
        ...,
        "asset": asset->,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug
          }
        }
      }
    }`, { slug })
    .then(res => preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]);
  return data;
}
