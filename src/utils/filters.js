//부분 공백만 없애주는 함수
function replaceName(name) {
  return name.replace(/!HS|\s!HE\s/gi, '');
}

//전체 공백을 없애주는 함수
function allReplaceName(name) {
  return name.replace(/!HS|!HE|(\s*)/gi, '');
}

//날짜 변환 함수
function repRlsDateReplace(date) {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
}

//영어 타이틀 변환
function engTitleSplit(title) {
  return title.split('(')[0];
}

//포스터 분리
function postSplit(posters) {
  return posters.split('|')[0];
}

//키워드, 장르 특수문자 제거
function specialCharRemove(list) {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  if (regExp.test(list)) {
    const listSplit = list.split(regExp);
    const listLen = listSplit.length;
    const randomNum = Math.floor(Math.random() * listLen);

    // console.log(listSplit);
    // console.log(listSplit.length);
    // console.log('랜덤넘버', randomNum);
    // console.log('확인해보자!!!!!!!!!', listSplit[randomNum]);
    // return list.length > 1 ? list.split(regExp)[1] : list.split(regExp)[0];
    return listSplit[randomNum];
    // 리스트가 하나일때
  } else return list;

  //배열로 내보낼때
  // if (regExp.test(list))
  //   return list.split(regExp).filter((value, index) => index < 2);
}

export {
  replaceName,
  repRlsDateReplace,
  postSplit,
  engTitleSplit,
  allReplaceName,
  specialCharRemove,
};
