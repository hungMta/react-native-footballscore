import {
  FIXTURE_ALL_FIXTURE_RESET,
  FIXTURE_GET_ALL_FIXTURE,
  FIXTURE_GET_ALL_FIXTURE_SUCCESS,
  FIXTURE_GET_ALL_FIXTURE_FAIL
} from "../../constants/types";

const init = {
  _link: {},
  count: 0,
  loading: true,
  fixtures: [],
  errMsg: null
};

export default (state = init, action) => {
  switch (action.type) {
    case FIXTURE_GET_ALL_FIXTURE_SUCCESS:
      return {
        ...state,
        _link: action.data._link,
        count: action.data.count,
        fixtures: action.data.fixtures.slice(0,100),
        loading: false
      };
    case FIXTURE_GET_ALL_FIXTURE_FAIL:
      return { ...state, errMsg: action.errMsg };
    case FIXTURE_ALL_FIXTURE_RESET:
      return init;
  }
  return state;
};
