//부분 공백만 없애주는 함수
function replaceName(name) {
  return name.replace(/!HS|\s!HE\s/gi, '');
}

//전체 공백을 없애주는 함수
function allReplaceName(name) {
  return name.replace(/!HS|!HE|\s/gi, '');
}

//날짜 변환 함수
function repRlsDateReplace(date) {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
}

function engTitleSplit(title) {
  return title.split('(')[0];
}

//포스터
function postSplit(posters) {
  return posters.split('|')[0];
}
export { replaceName, repRlsDateReplace, postSplit, engTitleSplit };
