import React from 'react'

const RepoComponent = ({ repo, loading }) => {
  // const currentRepo = repo;
  if (loading || !repo) {
    return <h3>loading...</h3>
  }
  console.log('Loading:: ', loading);
  console.log('Repo:: ', repo ? repo : 'Repo couldn\'t load');

  return (
    <div className="home">
      <div className='card'>
      <ul className="content-list">
        <li className="card-title  ">Repo: <u>{repo.name}</u></li>
        <li className="content-list-item"><strong>Language: </strong> {repo.language}</li>
        <li className="content-list-item"><strong>Followers: </strong> {Object.values(repo.followers).map(fwr => <p key={fwr.name} href=""> <u>{fwr.name}</u> &nbsp; </p>)}</li>
        <li className="content-list-item"><strong>URL: </strong> {repo.url}</li>
        <li className="content-list-item"><strong>Description: </strong> {repo.description}</li>
      </ul>
    </div>
    </div>
  )
}

export default RepoComponent