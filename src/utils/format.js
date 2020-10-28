function yesterdayFormat() {
  const yesterday = new Date();

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`;
  let date = yesterday.getDate() - 1; // 어제
  date = date >= 10 ? date : `0${date}`;

  // 날짜 형식 '20201018'
  return `${year}${month}${date}`;
}

export default yesterdayFormat;
