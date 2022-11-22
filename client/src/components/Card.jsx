import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Card = ({ user }) => {
  return (
    <div className="wrapper">
        <ul className="content-list">
            <li className="content-list-item">
                <img src={user.photos[0].value} alt="user avatar" className="content-avatar" />
                <div>
                  <p><b> {user.displayName} </b></p> 
                  <p><b> <LocationOnIcon/> {user._json.location}</b></p>
                </div>
            </li>
            <li className="content-list-item"><b>Email: </b>&nbsp; {user._json.email ? user._json.email : <b><i>Your email has not been set</i></b>}</li>
            <li className="content-list-item"><b> Total Public Repos: {user._json.public_repos}</b></li>
            <li className="content-list-item"><b> Total Private Repos: {user._json.total_private_repos}</b></li>
        </ul>
    </div>
  )
}

export default Card