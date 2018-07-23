import API_CONSTANT from "../../constants/api";

export default async function fetchData(path) {
  try {
    const url = path ? API_CONSTANT.END_POINT + path : API_CONSTANT.END_POINT;
    console.log(url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": API_CONSTANT.API_KEY
      }
    });
    console.log("response ", response);
    const json = await response.json();
    if (response.status === 200) {
      // console.log("success ", json);
      return json;
    }
    if(response.status === 404) {
        // console.log(json)
        return Promise.reject(json);    
    }
    // console.log("done")
  } catch (e) {
    // console.log("error");
    return Promise.reject(e);
  }
}
