import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Layout from '../../components/common/layout'
import Container from '../../components/common/container'
import PostTitle from '../../components/post/post-title'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostHeader from '../../components/post/post-header'
import PostBody from '../../components/post/post-body'
import SectionSeparator from '../../components/section-separator'
import MoreStories from '../../components/post/more-stories'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.title} />
                <meta property="og:image" content={'http:' + post.coverImage.url} />
                <meta property="og:url" content={'localhost:3000' + router.asPath} />
                <meta property="og:type" content="article" />
                <meta property="description" content={post.title} />
                <meta property="date" content={post.date} />
                <meta property="creation_date" content={post.date} />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@Twitter" />
                <meta property="twitter:title" content={'localhost:3000' + router.asPath} />
                <meta property="twitter:description" content={post.title} />
                <meta property="twitter:url" content={'localhost:3000' + router.asPath} />
                <meta property="twitter:image" content={'http:' + post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
