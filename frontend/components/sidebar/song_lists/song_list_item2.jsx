import React from 'react';

export const SongListItem = (props) => {
  return (
    <div className="song-item">
      <div className="user">{props.user}</div>
      <div className='title'>{props.title}</div>
      {props.liked ?  <i class="fa fa-heart" aria-hidden="true" /> : ""}
    </div>
  );
};
//
//   likeHeart() {
//     debugger;
//     if (this.props.liked) {
//       return (
//         <i class="fa fa-heart" aria-hidden="true" />
//       );
//     }
//   }
//
//   render() {
//     debugger;
//
//   }
// }
//
// export default SongListItem;
