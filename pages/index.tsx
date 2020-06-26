import {getAllPostsForHome} from '../lib/api';
import Head from 'next/head';
import Layout from '../components/common/layout';
import Container from '../components/common/container';
import Intro from '../components/common/intro';
import HeroPost from '../components/post/hero-post';
import MoreStories from '../components/post/more-stories';
import {CMS_NAME} from '../lib/constants';

export default function Index({preview, allPosts}) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({preview = false}) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: {preview, allPosts},
  };
}