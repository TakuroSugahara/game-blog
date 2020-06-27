import PostCard from './post-card'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-primary">
        他の記事
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostCard
            title={post.title}
            key={post.slug}
            coverImage={post.coverImage}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}
