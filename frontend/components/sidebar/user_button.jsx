import React from 'react';
import LogoutButtonContainer from './logout_button_container';

export default (props) => {

  const goToUser = () => {
    props.requestUserSongs(props.username);
  };

  return (
    <div className='user-nav-buttons'>
      <div className="user-button-container" onClick={goToUser}>
        <i
          className="fa fa-user-circle"
          aria-hidden="true"/>
      </div>
      <LogoutButtonContainer />
    </div>
  );
};
