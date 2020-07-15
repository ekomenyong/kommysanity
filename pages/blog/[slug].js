import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import { BlogJsonLd } from 'next-seo';

import { getAllPostsWithSlug, getPostBySlug } from 'lib/api';

import Layout from 'components/Layout';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';


export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const seoTitle = `${post.title} | Ekom Enyong » Digital Creator`;

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
          <>
            <NextSeo
              title={`${seoTitle}`}
              description={post.excerpt}
              canonical={`http://localhost:3000/blog/${post.slug}`}
              openGraph={{
                url: `http://localhost:3000/blog/${post.slug}`,
                title: `${seoTitle}`,
                description: `${post.excerpt}`,
                images: [
                  {
                    url: `${post.featImage}`,
                    width: 1200,
                    height: 630,
                    alt: `Cover image for ${post.title}`
                  }
                ],
              }}
            />
            <BlogJsonLd
              url={`http://localhost:3000/blog/${post.slug}`}
              title={`${seoTitle}`}
              description={`${post.excerpt}`}
              images={[
                `${post.featImage}`,
              ]}
              datePublished={`${post.date}`}
              dateModified={`${post._updatedAt}`}
              authorName={`${post.author.name}`}
            />
            <div className="single-post">
              <PostHeader
                title={post.title}
                subtitle={post.subtitle}
                date={moment(post.date).format('MMM D, YYYY')}
                author={post.author}
                imageUrl={post.featImage}
                category={post.category.name}
              />
              <div className="content container">
                <PostBody content={post.body} />
              </div>
            </div>
          </>
        )}
    </Layout>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlug(params.slug, preview);
  return {
    props: {
      preview,
      post: data
    }
  };
}

export async function getStaticPaths() {
  const data = await getAllPostsWithSlug();
  return {
    paths:
      data?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
