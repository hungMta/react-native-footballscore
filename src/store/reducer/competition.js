import {
  COMPETITION_GET_ALL_SUCCESS,
  COMPETITION_GET_ALL_FAIL,
  COMPETITION_GET_COMPETITION_DETAIL_SUCCESS,
  COMPETITION_GET_COMPETITION_DETAIL_FAIL,
  COMPETITION_GET_ALL_RESET_SATE,
  COMPETITION_GET_COMPETITION_DETAIL_RESET_SATE
} from "../../constants/types";

const init = {
  data: [],
  allLoading: true,
  detailLoading: true,
  hasLoadmore: false,
  errMsg: null
  // competition: {}
};

export default (state = init, action) => {
  // console.log("action  ", action);
  // console.log("action.data ", action.errMsg);
  switch (action.type) {
    case COMPETITION_GET_ALL_SUCCESS:
      return { ...state, data: action.data, allLoading: false };
    case COMPETITION_GET_ALL_FAIL:
      return { ...state, errMsg: action.errMsg };
    // case COMPETITION_GET_COMPETITION_DETAIL_SUCCESS:
    //   return { ...state, competition: action.data };
    // case COMPETITION_GET_COMPETITION_DETAIL_FAIL:
    //   return { ...state, errMsg: action.errMsg };
    case COMPETITION_GET_ALL_RESET_SATE:
      return init;
    case COMPETITION_GET_COMPETITION_DETAIL_RESET_SATE:
      return { ...state, detailLoading: true, competition: {}, errMsg: null };
  }
  return state;
};
