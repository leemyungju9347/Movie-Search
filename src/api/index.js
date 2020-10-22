import axios from 'axios';

const config = {
  baseURL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&sort=prodYear,1&',
  boxOfficeUrl:
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?',
  serviceKey: '3380MTF8585C14F620J3',
  boxOfficeKey: 'b385d875e19cb516fcee994262cb8adb',
};

function movieSchApi(inputValue) {
  return axios.get(
    `${config.baseURL}${inputValue}&ServiceKey=${config.serviceKey}`,
  );
}

function boxOfficeApi(date) {
  return axios.get(
    `${config.boxOfficeUrl}key=${config.boxOfficeKey}&targetDt=${date}`,
  );
}

export { movieSchApi, boxOfficeApi };
