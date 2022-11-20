import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import ReposComponent from '../components/Repos';

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(5)
  

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get('data.json');
      setRepos(res.data);
      setLoading(false);
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
  )
}

export default Repos