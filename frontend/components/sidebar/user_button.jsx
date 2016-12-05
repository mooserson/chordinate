import React from 'react';
import LogoutButtonContainer from './logout_button_container';

export default (props) => {

  // reset search field value and hide search-clear "x" before request
  const goToUser = () => {
    document.getElementById("search").value = "";
    $('.search-clear .fa').addClass('hidden');
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
