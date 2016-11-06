export const createSong = (song, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/song',
    data: song,
    success
  });
};
