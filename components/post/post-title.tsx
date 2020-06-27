export default function PostTitle({ children }) {
  return (
    <h1 className="text-primary text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mt-6 lg:mt-10 mb-4 lg:mb-8 text-left">
      {children}
    </h1>
  )
}
