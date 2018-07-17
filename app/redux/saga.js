import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData } from "./actionCreator";
const api = require("../api/NewsApi");

function* getApiData(action) {
  try {
    const path =
      "top-headlines?sources=bbc-sport&apiKey=8b38389dc3e04267b8bf3d1d2836b700";
    const data = yield call(api.callAPI(), path); 
    yield put(receiveApiData(data))
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga(){
    yield takeLatest|(REQUEST_API_DATA, getApiData);
}
