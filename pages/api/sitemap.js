import { SitemapStream, streamToPromise } from "sitemap";
import client from '../../lib/sanity';

export default async (req, res) => {

  const data = await client.fetch(
    `*[_type == "post"] {
      'slug': slug.current,
      _updatedAt
    }`
  );

  const smStream = new SitemapStream({
    hostname: "https://ekomenyong.com",
  });

  // Add home page
  smStream.write({
    url: "/",
  });

  // add all dynamic url to the sitemap which is fetched from a source.
  data.forEach((post) => {
    smStream.write({
      url: `/blog/${post.slug}`,
      lastmod: post._updatedAt,
    });
  });

  // End of sitemap
  smStream.end();

  // generate a sitemap and add the XML feed to a url which will be used later on.
  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
};
