import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Pagination } from '@mui/material';
// import Pagination from '@mui/material';
// import Pagination from '@mui/material/Pagination';
import Pagination from '@mui/material/Pagination';
// import { Pagination } from '@mui/material';
import {repos} from '../data';

const Repos = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePageChange = (e, p) => {

  }
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <ul className="content-list">
        { repos.map(repo => (
            // <Card key={repo.id} repo = {repo} />
            <li key={repo.id} className="link content-list-item" onClick={()=>navigate(`${repo.id}`)}>{repo.name}</li>
        )) }
      </ul>
      <Pagination count={10} color='primary' onChange={handlePageChange}> </Pagination>
    </div>
  )
}

export default Repos