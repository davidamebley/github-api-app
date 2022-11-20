import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReposComponent = ({ repos, loading }) => {
  const navigate = useNavigate();
  if (loading) {
    return <h3>loading...</h3>
  }

  return (
    <div className='repos'>
      <ul className="content-list">
        { repos.map(repo => (
            <li key={repo.id} className="link content-list-item" onClick={()=>navigate(`${repo.id}`)}>{repo.name}</li>
        )) }
      </ul>
    </div>
  )
}

export default ReposComponent