import Link from 'next/link'

export default function PostCard({ title, coverImage, slug }) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="max-w-sm overflow-hidden mb-10 rounded cursor-pointer">
        <img src={coverImage.url} alt={title} className="rounded-lg" />
        <div className="pt-4">
          <span className="text-primary hover:underline font-bold text-lg">{title}</span>
        </div>
        <div className="flex px-3 pt-4 flex-wrap">
          <div className="mr-auto ">
            <span className="text-gray-600 text-md">実績&nbsp;</span>
            <span className="text-primary text-md">10 件</span>
          </div>
          <div className="mr-auto ">
            <span className="text-gray-600 text-md">料金&nbsp;&nbsp;</span>
            <span className="text-primary text-md">1,000 / 月</span>
          </div>
        </div>
        <div className="pt-6 text-center">
          <button className="bg-accent hover:bg-accent-700 text-white font-bold py-3 px-8 rounded-full">
            相談してみる
          </button>
        </div>
      </div>
    </Link>
  )
}
