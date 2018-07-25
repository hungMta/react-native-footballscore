import {
  put,
  takeLatest,
  call,
  all,
  fork,
  take,
  cancel
} from "redux-saga/effects";
import fetchData from "../api/index";
import {
  COMPETITION_GET_ALL_COMPETITON,
  COMPETITION_GET_ALL_RESET_SATE,
} from "../../constants/types";

import {
  getAllCompetitionSuccess,
  getAllCompetitionFail,
  resetCompetitionState
} from "../action/competition";

function* fetchDataAllCompetition() {
  try {
    const data = yield call(fetchData, "competitions");
    yield put(getAllCompetitionSuccess(data));
  } catch (error) {
    yield put(getAllCompetitionFail(error));
  }
}

function* getAllCompetition() {
  try {
    const task = yield fork(fetchDataAllCompetition);
    const action = yield take([COMPETITION_GET_ALL_RESET_SATE]);
    if (action.type === COMPETITION_GET_ALL_RESET_SATE) {
      yield cancel(task);
    }
  } catch (error) {
    yield put(getAllCompetitionFail(error));
  }
}

export function* watchGetAllCompetititon() {
  yield takeLatest(COMPETITION_GET_ALL_COMPETITON, getAllCompetition);
}

function* getCompetitionDetail() {}

function* resetCompetition() {
  yield put(resetCompetitionState());
}

export function* watchResetCompetition() {
  yield takeLatest(COMPETITION_GET_ALL_RESET_SATE, resetCompetition);
}

export function* watchGetCompetitionDetail() {}
