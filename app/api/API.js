import constant from '../constants'

export  async function callAPI(path) {
    const url = constant.API_URL_V2 + path
    console.log(url)
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'X-Auth-Token': constant.API_TOKEN
        }
    });
    const json = await response.json();
    return json;
}