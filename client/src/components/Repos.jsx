import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal/Modal';

const ReposComponent = ({ repos, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalRepo, setModalRepo] = useState('');
  const navigate = useNavigate();
  if (loading) {
    return <h3>loading...</h3>
  }

  return (
    <div className='repos'>
      <h1>Your repositories</h1>
      <ul className="content-list">
        {
          repos ? (
            repos.map(repo => (
              <li key={repo.id} className="link content-list-item" onClick={()=> {setShowModal(true); setModalRepo(repo)}}>{repo.name}</li>
          ))
          ) : (
            <h3>You have no repos</h3>
          )
        }
      </ul>
      {/* Modal */}
      <Modal showModal={showModal} onClose={() => setShowModal(false)} modalRepo={modalRepo} />
    </div>
  )
}

export default ReposComponent