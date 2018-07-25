import {
  NEWS_GET_SUCCESS,
  NEWS_GET_FAIL,
  NEWS_RESET
} from "../../constants/types";

const init = {
  articles: [],
  isLoading: true,
  errMsg: null
};

export default (state = init, action) => {
  switch (action.type) {
    case NEWS_GET_SUCCESS:
      return { ...state, articles: action.data.articles, isLoading: false };
    case NEWS_GET_FAIL:
      return { ...state, errMsg: action.errMsg };
    case NEWS_RESET:
      return init;
  }
  return state;
};

