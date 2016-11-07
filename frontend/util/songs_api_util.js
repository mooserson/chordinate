export const createLike = (like, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/like',
    data: like,
    success
  });
};

export const destroyLike = (like, success) => {
  $.ajax({
    method: 'DELETE',
    url: 'api/like',
    data: like,
    success
  });
};
