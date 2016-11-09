export const fetchNewSongs = (success) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {type: "new"},
    success,
  });
};

export const fetchPopularSongs = (success) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {type: "popular"},
    success,
  });
};

export const fetchPlayedSongs = (success) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {type: "played"},
    success,
  });
};
