import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Octokit } from "@octokit/core";
import RepoComponent from '../components/Repo';

const Repo = ( {accessToken} ) => {
  const {id} = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get List of Repos Using AccessToken and Octokit.js package
  const octokit = new Octokit({
    auth: accessToken
  })

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await octokit.request('GET /user/repos{?visibility,affiliation,type,sort,direction,per_page,page,since,before}', {});
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    };

    fetchRepos();
  }, []);

  const repo = repos.find((rep) => rep.id.toString() === id);
  return (
    <div>
      <RepoComponent repo={repo} loading={loading} />
    </div>
  )
}

export default Repo