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
    url: `api/songs/${id}`,
    success
  });
};

export const destroySong = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/songs/${id}`,
    success
  });
};
