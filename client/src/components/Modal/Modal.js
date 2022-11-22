import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Modal.css';

const Modal = ({ showModal, modalRepo, onClose }) => {
  const repo = modalRepo;
  const navigate = useNavigate();
  if (!showModal) return null;

  return (
    <div onClick={onClose} className='modal-overlay'>
      <div onClick={(e) => { e.stopPropagation()}} className='container-modal'>
        <div className='modalRight'>
          <p className='modal--close-button' onClick={onClose}>
            Close
          </p>
          <div className='modal-content'>
          <div className=''>
            <ul className="content-list">
              <li className="card-title  ">Repo: <u>{repo.name}</u></li>
              <li className="content-list-item"><strong>Language: &nbsp; </strong> {repo.language}</li>
              <li className="content-list-item"><strong>Followers: &nbsp; </strong> <i> <a href="/followers">Click here to view your repo followers</a> </i> </li>
              <li className="content-list-item"><strong>URL: &nbsp; </strong> {repo.html_url}</li>
              <li className="content-list-item"><strong>Description</strong> </li>
              <li className="content-list-item"> 
                <span style={{alignItems: "flex-start", textAlign: "start"}}>
                {repo.description ? repo.description : <i> No descpription set yet</i> }    
                </span>
              </li>
            </ul>
          </div>
          </div>
          <div className='container--modal-button'>
            <button className='btnOutline' onClick={onClose}> Close </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal