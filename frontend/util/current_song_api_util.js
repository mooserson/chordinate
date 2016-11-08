export const createSong = (song, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/songs',
    data: song,
    success
  });
};

export const fetchSong = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/songs/${id}`,
    success,
    error
  });
};

export const destroySong = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `api/songs/${id}`,
    success
  });
};
