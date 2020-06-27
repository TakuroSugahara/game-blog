import PostTitle from './post-title'

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <img src={coverImage.url} alt={title} />
      </div>
    </>
  )
}
