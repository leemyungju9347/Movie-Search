//Search Page

//쿠키 저장
//value
function saveTitleToCookie(value) {
  document.cookie = `movie_value=${value}`;
}

//type
function saveTypeToCookie(type) {
  document.cookie = `movie_type=${type}`;
}

//쿠키 가져오기
function getTitleFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_value\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getTypeFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_type\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

//Detail Page
function saveItemToCookie(value) {
  document.cookie = `dp_title=${value}`;
}

function getItemFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)dp_title\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

//favorite movie
function saveFavoriteToCookie(value) {
  document.cookie = `favorite_item=${value}`;
}

function getFavoriteFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)favorite_item\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveTitleToCookie,
  saveTypeToCookie,
  getTitleFromCookie,
  getTypeFromCookie,
  deleteCookie,
  saveItemToCookie,
  getItemFromCookie,
  saveFavoriteToCookie,
  getFavoriteFromCookie,
};
