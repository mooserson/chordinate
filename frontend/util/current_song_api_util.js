export const createSong = (song, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: song,
    success
  });
};

export const fetchSong = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/song/${id}`,
    success
  });
};
