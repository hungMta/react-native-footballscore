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
  competition: {},
  error: ""
};

export default (state = init, { type, payload }) => {
  console.log("type ", type);
  console.log("payload ", payload);
  switch (type) {
    case COMPETITION_GET_ALL_SUCCESS:
      return { ...state, data: payload, allLoading: false };
    case COMPETITION_GET_ALL_FAIL:
      return { ...state, error: payload };
    case COMPETITION_GET_COMPETITION_DETAIL_SUCCESS:
      return { ...state, competition: payload };
    case COMPETITION_GET_COMPETITION_DETAIL_FAIL:
      return { ...state, error: payload };
    case COMPETITION_GET_ALL_RESET_SATE:
      return init;
    case COMPETITION_GET_COMPETITION_DETAIL_RESET_SATE:
      return { ...state, detailLoading: true, competition: {}, error: "" };
  }
  return state;
};
