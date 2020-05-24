import axios from 'axios'

const config = {
    baseURL : 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=',
    serviceKey:'3380MTF8585C14F620J3'

}

//serviceKey : 3380MTF8585C14F620J3
function movieSchApi(title){
    return axios.get(`${config.baseURL}${title}&ServiceKey=${config.serviceKey}`)
}

export {movieSchApi}