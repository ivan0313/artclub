import React from 'react'

const MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" 
];

export default function PostCard({post}) {
  const d = new Date(post.createdOn);
  const curr_date = d.getDate();
  const curr_month = d.getMonth()
  const curr_year = d.getFullYear();
  const date = MONTHS[curr_month] + " " + curr_date + ", " + curr_year

  return (
    <React.Fragment>
      <div className="post-preview">
        <a href="post-oil-painting.html">
          <h2 className="post-title">{post.heading}</h2>
          <h3 className="post-subtitle">{post.subHeading}</h3>
        </a>
        <p className="post-meta">Posted on {date}</p>
      </div>
      <hr className="my-4" />
    </React.Fragment>
  )
}
