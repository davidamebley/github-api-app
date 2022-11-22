import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Modal from '../components/Modal/Modal';
import ReposComponent from '../components/Repos';
import { CSSTransition } from "react-transition-group";
import { Octokit } from "@octokit/core";

const Repos = ({ accessToken }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);

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
        <Pagination count={paginationCount} color='primary' onChange={handlePageChange}> </Pagination>
      </div>
    </div>
  );
}

export default Repos