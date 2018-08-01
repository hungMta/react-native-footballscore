import { AsyncStorage } from "react-native";
import { fork, call, take, takeLatest, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFail,
  loginCancelRequest,
  changeLoggingState,
  logoutSuccess,
  checkLogined,
  doesnotLogin
} from "../action/login";

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  CHECK_LOGINED
} from "../../constants/types";
import { delay } from "redux-saga";
import firebase from "react-native-firebase";
import { GoogleSignin } from "react-native-google-signin";
import { PROFILE } from "../../constants/key";

async function loginViaGoogleSignin() {
  console.log("loginViaGoogleSignin");
  const credential = await new Promise(function(resolve, reject) {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure().then(() => {
        console.log("Play services are available. can now configure library");
        GoogleSignin.signIn()
          .then(user => {
            const credential = {};
            credential.providerId = "google.com";
            credential.token = user.idToken;
            credential.secret = user.accessToken;
            resolve(credential);
          })
          .catch(err => {
            console.log("WRONG SIGNIN", err);
            reject(err);
          })
          .done();
      });
    });
  });
  console.log("return credential: ", credential);
  return credential;
}

async function loginViaFirebase(credential) {
  console.log("loginViaFirebase");
  const profile = await new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then(user => {
        resolve(user.additionalUserInfo.profile);
      })
      .catch(err => {
        console.log("return err : ", err);
        reject(err);
      });
  });
  return profile;
}

async function storeData(profile) {
  console.log("storeData");
  const store = await new Promise((resolve, reject) => {
    try {
      AsyncStorage.setItem(PROFILE, JSON.stringify(profile))
        .then(() => {
          resolve(true);
        })
        .catch(error => {
          console.log("storeData #1 ", error);
          reject(error);
        });
    } catch (error) {
      console.log("storeData #2 ", error);
      reject(error);
    }
  });
}

async function getProfileFromStore() {
  console.log("getProfileFromStore");
  try {
    const value = await AsyncStorage.getItem(PROFILE)
      .then(value => {
        console.log(value);
        return value;
      })
      .catch(() => {
        return "errorrrrr";
      });
    console.log("value ", value);
    if (value == null) {
      return Promise.reject("Profile doesn't exits");
    }
    const json = await JSON.parse(value);
    console.log("json ", json);
    return json;
  } catch (error) {
    console.log(error);
    return Promise.reject("Profile doesn't exits");
  }
}

async function loginGoogle() {
  console.log("loginGoogle");
  try {
    const credential = await loginViaGoogleSignin();
    try {
      const profile = await loginViaFirebase(credential);
      try {
        await storeData(profile);
        return profile;
      } catch (error) {
        console.log("save profle error: ", error);
        return Promise.reject(error);
      }
    } catch (error) {
      console.log("loginViaFirebase error: ", error);
      return Promise.reject(error);
    }
  } catch (error) {
    console.log("loginViaGoogleSignin error: ", error);
    return Promise.reject(error);
  }
}

function* login() {
  try {
    console.log("changeLoggingState");
    yield put(changeLoggingState());
    const result = yield loginGoogle();
    console.log("result ", result);
    yield put(loginSuccess(result));
  } catch (error) {
    console.log("login fail ", error);
    yield put(loginFail(error));
  }
}

function* logout() {
  AsyncStorage.removeItem(PROFILE, error => {
    console.log("error", error );
  });
  yield put(logoutSuccess());
}

function* gecheckLogined() {
  try {
    console.log("checklogined");
    const profile = yield getProfileFromStore();
    yield put(loginSuccess(profile));
  } catch (error) {
    console.log("checkLogined error", error);
    yield put(doesnotLogin());
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export function* watchLogoutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export function* watchCheckLogined() {
  yield takeLatest(CHECK_LOGINED, gecheckLogined);
}
