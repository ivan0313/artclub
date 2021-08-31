import React from 'react'
import { formatDate } from '../../utils';

export default function PostCard({post}) {
  return (
    <React.Fragment>
      <div className="post-preview">
        <a href={`/artclub/post?id=${post.id}`}>
          <h2 className="post-title">{post.heading}</h2>
          <h3 className="post-subtitle">{post.subHeading}</h3>
        </a>
        <p className="post-meta">Posted on {formatDate(post.createdOn)}</p>
      </div>
      <hr className="my-4" />
    </React.Fragment>
  )
}
