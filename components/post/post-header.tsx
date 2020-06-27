import PostTitle from './post-title'
import * as React from 'react'

type PostHeaderType = {
  title: string
  coverImage: { url: string }
}

const PostHeader: React.FC<PostHeaderType> = ({ title, coverImage }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <img src={coverImage.url} alt={title} />
      </div>
    </>
  )
}

export default PostHeader
