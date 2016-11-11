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

export const fetchSearchSongs = (query, success) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {
      type: 'query',
      query: query
    },
    success,
  });
};

export const fetchUserSongs = (user, success) => {
  $.ajax({
    method: 'get',
    url: 'api/songs',
    data: {
      type: 'user',
      user: user
    },
    success,
  });
};
