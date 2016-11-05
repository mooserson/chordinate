export const postSong = success => {
  $.ajax({
    method: 'POST',
    url: 'api/song',
    success
  });
};
