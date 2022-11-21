import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({user}) => {
  // const navigate = useNavigate();
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
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
                  <img src={user.photos[0].value} alt="user avatar" className="avatar" />
              </li>
              <li className="link listItem"> {user.displayName} </li>
            </Link>
            <li className="listItem" onClick={logout}>Logout</li>
          </ul>) : (
            <Link className='link' to="login">Login</Link>
          )
        }
    </div>
  )
}

export default Navbar