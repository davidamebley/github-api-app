import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import ReposComponent from '../components/Repos';
import { Octokit } from "@octokit/core";

const Repos = ({ accessToken }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(5);

  // Get List of Repos Using AccessToken and Octokit.js package
  const octokit = new Octokit({
    auth: accessToken
  })

  const getUserRepos = async () =>{
    try {
      setLoading(true);
      const response = await octokit.request('GET /user/repos{?visibility,affiliation,type,sort,direction,per_page,page,since,before}', {});
      
      console.log('Octokit repos...: ', response.data[0])
      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }
  

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

    getUserRepos();
    fetchRepos();
  }, []);

  /* const fetchRepos = async () => {
    setLoading(true);
    const res = await axios.get('data.json');
    setRepos(res.data);
    setLoading(false);
  }; */

  // Get Current Page Data
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const paginationCount = Math.ceil(repos.length / reposPerPage);

  // Change Page Content 
  const handlePageChange = (e, p) => {
    setCurrentPage(p);
  }


  return (
    <div className='repos'>
      {/* Passing data to the ReposComponent */}
      <ReposComponent repos={currentRepos} loading={loading} />
      <div>
        <h1> {accessToken} </h1>
        <Pagination count={paginationCount} color='primary' onChange={handlePageChange}> </Pagination>
      </div>
    </div>
  )
}

export default Repos