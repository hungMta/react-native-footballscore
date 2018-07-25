import {
  LEAGUE_TABLE_GET_SUCCESS,
  LEAGUE_TABLE_GET_FAIL,
  RESET_LEAGUE_TABLE_STATE
} from "../../constants/types";

const init = {
  isLoading: true,
  data: {},
  errMsg: null
};

export default (state = init, action) => {
  switch (action.type) {
    case LEAGUE_TABLE_GET_SUCCESS:
      return {
        isLoading: false,
        data: action.data
      };
    case LEAGUE_TABLE_GET_FAIL:
      return {
        ...state,
        isLoading: false,
        errMsg: action.error
      };
    case RESET_LEAGUE_TABLE_STATE:
      return init;
  }
  return state;
};
