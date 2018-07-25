import {
  fork,
  all,
  call,
  cancel,
  takeLatest,
  take,
  put
} from "redux-saga/effects";
import {
  NEWS_GET,
  NEWS_RESET
} from "../../constants/types";
import { fetchDataNews } from "../api/index";
import { getNewsSuccess, getNewsFail, resetNews } from "../action/news";

function* fecthData() {
  try {
    const data = yield call(fetchDataNews);
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFail(error));
  }
}

function* getNews() {
  try {
    const task = yield fork(fecthData);
    const action = yield take([NEWS_RESET]);
    if (action.type === NEWS_RESET) {
      yield cancel(task);
    }
  } catch (error) {
    yield put(getNewsFail(error));
  }
}

function* resetNewsState() {
  yield put(resetNews());
}

export function* watchGetNews() {
  yield takeLatest(NEWS_GET, getNews);
}

export function* watchResetNews() {
  yield takeLatest(NEWS_RESET, resetNewsState);
}
