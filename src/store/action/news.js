import {
  NEWS_GET,
  NEWS_GET_FAIL,
  NEWS_GET_SUCCESS,
  NEWS_RESET
} from "../../constants/types";

export function getNews() {
  return {
    type: NEWS_GET
  };
}

export function resetNews() {
  return {
    type: NEWS_RESET
  };
}

export function getNewsSuccess(data) {
  return {
    type: NEWS_GET_SUCCESS,
    data: data
  };
}

export function getNewsFail(error) {
  return {
    type: NEWS_GET_FAIL,
    errMsg: "Something went wrong"
  };
}
