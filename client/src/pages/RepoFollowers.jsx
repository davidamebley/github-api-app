import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Octokit } from "@octokit/core";

const RepoFollowers = ( {accessToken} ) => {
  const [repoFollowers, setRepoFollowers] = useState([]);

  // Get List of Repos Using AccessToken and Octokit.js package
  const octokit = new Octokit({
    auth: accessToken
  })

  useEffect(() => {
    const fetchRepoFollowers = async () => {
      try {
        const response = await octokit.request('GET /user/followers{?30,1}', {});
        setRepoFollowers(response.data);
      } catch (error) {
        console.log(error)
      }
    };

      fetchRepoFollowers();
  }, [accessToken]);

  return (
    <div className='repos'>
      <h1>Your followers</h1>
        <ul className="content-list">
          
          {
            true ? (
              repoFollowers.map(follower => (
                <li key={follower.id} className="link content-list-item">
                      <img src={follower.avatar_url} alt="content-avatar" className="avatar"/>
                      <div style={{marginLeft: '1em'}}>{follower.login}</div>
                </li>
              ))
            ): (
              <h3>You have no followers</h3>
            )
          }
        </ul>
    </div>
  )
}

export default RepoFollowers