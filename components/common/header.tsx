import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-accent p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link as="/" href="/">
          <span className="font-semibold text-xl tracking-tight cursor-pointer">Game Life</span>
        </Link>
      </div>
      <div className="block">
        <svg
          className="fill-current h-5 w-5 text-white mr-2"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>
    </nav>
  )
}
