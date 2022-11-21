import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <div className="wrapper">
        <ul className="content-list">
            <li className="content-list-item">
                <img src="" alt="user avatar" className="content-avatar" />
                <p>Names</p>
            </li>
            <li className="content-list-item">Email</li>
            <li className="content-list-item">Total Public Repos</li>
            <li className="content-list-item">Total Private Repos</li>
        </ul>
        </div>
    </div>
  )
}

export default Home