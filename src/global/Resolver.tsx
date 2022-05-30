export const searchedMovie = window.location.href.split('?').pop();
export const queryValue = window.location.href
  .split('?')
  .pop()
  ?.replaceAll('%20', ' ');
