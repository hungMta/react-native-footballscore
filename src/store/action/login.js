import {
  LOGIN_CANCEL,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CHANGE_LOGIN_STATE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  CHECK_LOGINED,
  DOESNOT_LOGIN
} from "../../constants/types";

export function loginRequest() {
  return { type: LOGIN_REQUEST };
}

export function loginSuccess(profile) {
  return { type: LOGIN_SUCCESS, profile };
}

export function loginFail(error) {
  return { type: LOGIN_FAIL, error };
}

export function loginCancelRequest() {
  return { type: LOGIN_CANCEL };
}

export function changeLoggingState() {
  return { type: CHANGE_LOGIN_STATE };
}

export function logoutRequest() {
  return { type: LOGOUT_REQUEST };
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}

export function checkLogined() {
  return { type: CHECK_LOGINED };
}

export function doesnotLogin() {
  return { type: DOESNOT_LOGIN };
}
