import axios from 'axios';

const config = {
  baseURL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&sort=prodYear,1&',
  serviceKey: '3380MTF8585C14F620J3',
};

function movieSchApi(inputValue) {
  return axios.get(
    `${config.baseURL}${inputValue}&ServiceKey=${config.serviceKey}`,
  );
}

export { movieSchApi };
