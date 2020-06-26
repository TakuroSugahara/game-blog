import Link from 'next/link'

export default function HeroPost({ title, coverImage, slug }) {
  return (
    <div className="max-w-sm overflow-hidden mb-10 rounded">
      <img src={coverImage.url} alt={title} className="rounded-lg" />
      <div className="pt-4">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="text-primary hover:underline font-bold text-lg">{title}</a>
        </Link>
      </div>
      <div className="py-4 text-center">
        <button className="bg-accent hover:bg-accent-700 text-white font-bold py-2 px-8 rounded-full">
          相談してみる
        </button>
      </div>
    </div>
  )
}
