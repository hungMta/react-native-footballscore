import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHANGE_LOGIN_STATE,
  LOGOUT_SUCCESS,
  DOESNOT_LOGIN
} from "../../constants/types";

const init = {
  profile: {},
  isLogging: false,
  errMsg: "",
  isLoginSuccess: false,
  logoutSuccess: false,
  checkIsLoged: 0
};

export default (state = init, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_LOGIN_STATE:
      return { ...state, isLogging: true };
    case LOGIN_REQUEST:
      return { ...state, isLogging: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        isLogging: false,
        isLoginSuccess: true,
        logoutSuccess: false,
        checkIsLoged: 1
      };
    case LOGIN_FAIL:
      return { ...state, isLogging: false, errMsg: action.error };
    case LOGOUT_SUCCESS:
      return { ...init, logoutSuccess: true };
    case DOESNOT_LOGIN:
      return { ...init, checkIsLoged: -1 };
  }
  return state;
};
