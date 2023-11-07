import React from 'react';

// profile modal component
const Modal = ({ user, isOpen, closeModal, logOut }) => {
    return (
        isOpen && (
            <div className='overlay fadeIn' id='overlay' onClick={closeModal}>
                <div className='modal'>
                    <p className='x' id='close'>&times;</p>
                    <h1 className='greeting-heading'>Hello,</h1>
                    <div className="profile-div">
                        <img src={user?.image} alt="profile pic" />
                        <h2 className='heading-name'>{user?.name}</h2>
                    </div>
                    <button className='log-out' onClick={logOut}>Log Out</button>
                </div>
            </div>
        )
    );
};

export default Modal;
