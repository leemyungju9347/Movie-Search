//Search Page

//쿠키 저장
function saveToCookie(type, value) {
  document.cookie = `${type}=${value}`;
}

// 쿠키 가져오기
// value
function getTitleFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_value\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// option
function getOptionFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie_option\s*=\s*([^;]*).*$)|^.*$/,
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
  const testArr = [];
  testArr.push(value);
  document.cookie = `favorite_item=${testArr}`;
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
  saveToCookie,
  getTitleFromCookie,
  getOptionFromCookie,
  deleteCookie,
  saveItemToCookie,
  getItemFromCookie,
  saveFavoriteToCookie,
  getFavoriteFromCookie,
};
