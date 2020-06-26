import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import Layout from '../components/common/layout'
import Container from '../components/common/container'
import Intro from '../components/common/intro'
import MoreStories from '../components/post/more-stories'
import PostCard from '../components/post/post-card'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const firstPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Intro />
        <Container>
          {firstPost && (
            <PostCard
              title={firstPost.title}
              coverImage={firstPost.coverImage}
              slug={firstPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome(false)
  return {
    props: { allPosts },
  }
}
