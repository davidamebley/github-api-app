import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import {repos} from '../data';

const Repos = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePageChange = (e, p) => {
    setPage(p);
  }
  const pageLimit = 3;
  const dataLength = repos.length;
  let pageOffset = ((pageLimit * page) - pageLimit + 1);
  const paginationCount = Math.ceil(dataLength / pageLimit)
  useEffect(() => {
    
  }, []);
  return (
    <div className='repos'>
      <ul className="content-list">
        { repos.map(repo => (
            // <Card key={repo.id} repo = {repo} />
            <li key={repo.id} className="link content-list-item" onClick={()=>navigate(`${repo.id}`)}>{repo.name}</li>
        )) }
      </ul>
      <div>
        <h4>Current page: {page} Data Length: {dataLength} PageOffSet: {pageOffset} </h4>
        <Pagination count={paginationCount} color='primary' onChange={handlePageChange}> </Pagination>
      </div>
    </div>
  )
}

export default Repos