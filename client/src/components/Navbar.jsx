import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">GitHub Api App
          {/* <Link className='link' to="/">GitHub Api App</Link> */}
        </span>
        <ul className="list">
            <li className="listItem">
                <img src="" alt="user avatar" className="avatar" />
            </li>
            <li className="listItem">David Amebs</li>
            <li className="listItem" >Logout</li>
        </ul>
    </div>
  )
}

export default Navbar