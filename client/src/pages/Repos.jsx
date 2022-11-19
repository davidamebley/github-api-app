import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import {repos} from '../data';

const Repos = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <ul className="content-list">
        { repos.map(repo => (
            // <Card key={repo.id} repo = {repo} />
            <li key={repo.id} className="link content-list-item" onClick={()=>navigate(`${repo.id}`)}>{repo.name}</li>
        )) }
      </ul>
      
    </div>
  )
}

export default Repos