import moment from 'moment';

import { getAllBlogsForHome } from 'lib/api';

import Layout from 'components/Layout';
import About from 'components/About';
import PostCard from 'components/PostCard';

export async function getStaticProps({ preview = false }) {
  const data = await getAllBlogsForHome(preview);
  return {
    props: { preview, post: data },
  };
}

export default function Home({ post }) {
  return (
    <Layout>
      <div className="homepage">
        <div className="about">
          <h1 className="title">
            <About />
          </h1>
        </div>
        <div className="post-grid">
          {post.map(homePosts => (
            <PostCard
              key={homePosts.slug}
              slug={homePosts.slug}
              category={homePosts.category.name}
              title={homePosts.title}
              excerpt={homePosts.excerpt}
              date={moment(homePosts.date).format('MMM D, YYYY')}
              imageUrl={homePosts.featImage}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
