import React from 'react'
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className='card'>
        <Link className='link' to={`/post/${post.id}`}>
        <span className="card-title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc"> {post.desc} </p>
        <button className="card-button">Read More</button>
      </Link>
    </div>
  )
}

export default Card