import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <span className="logo">
          <Link className='link' to="/">GitHub Api App</Link>
        </span>
        {user ?
          (<ul className="list">
            <Link className='link listItem' to='repos'>Repos</Link>
            <Link className='list' to='/' style={{color: 'inherit', textDecoration: 'none'}}>
              <li className="link listItem">
                  <img src="" alt="user avatar" className="avatar" />
              </li>
              <li className="link listItem">David Amebs</li>
            </Link>
            <li className="listItem" >Logout</li>
          </ul>) : (
            <Link className='link' to="login">Login</Link>
          )
        }
    </div>
  )
}

export default Navbar