import React from 'react';
import { useParams } from 'react-router-dom';
import {repos} from '../data';

const Repo = () => {
  const {id} = useParams();
  const repo = repos.find((rep) => rep.id.toString() === id);
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

export default Repo