import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import moment from 'moment';

import { getAllPostsWithSlug, getPostBySlug } from 'lib/api';

import Layout from 'components/Layout';
import PostBody from 'components/PostBody';
import PostHeader from 'components/PostHeader';

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostBySlug(params.slug, preview);
  return {
    props: {
      preview,
      post: data
    },
  };
}

export async function getStaticPaths() {
  const data = await getAllPostsWithSlug();
  return {
    paths:
      data.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
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
    </Layout>
  );
}
