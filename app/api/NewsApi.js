import constant from '../constants'

export async function callAPI(path) {
    try{
        const url = constant.NEWS_API_URL + path
        console.log(url)
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                'X-Auth-Token': constant.API_TOKEN
            }
        });
        const json = await response.json();
        return json;
    }catch( error){
        console.log(error)
    }
   
}