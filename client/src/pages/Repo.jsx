import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RepoComponent from '../components/Repo';

const Repo = () => {
  const {id} = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await axios.get('../data.json');
        setRepos(res.data);
        setLoading(false);
      } catch (error) {
        console.log('Error: ', error);
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