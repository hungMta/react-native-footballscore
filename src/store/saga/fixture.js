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
  FIXTURE_ALL_FIXTURE_RESET,
  FIXTURE_GET_ALL_FIXTURE,
} from "../../constants/types";

import {
  getAllFixturesSuccess,
  getAllFixturesFail,
  resetFixturesState
} from "../action/fixture";

function* fetchDataAllFixtures(idCompetition) {
  try {
    const data = yield call(
      fetchData,
      "competitions/" + idCompetition + "/fixtures"
    );
    yield put(getAllFixturesSuccess(data));
  } catch (error) {
    yield put(getAllFixturesFail(error));
  }
}

function* getAllFixtures(action) {
  const idCompetition = action.idCompetition;
  try {
    const task = yield fork(fetchDataAllFixtures, idCompetition);
    const action = yield take([FIXTURE_ALL_FIXTURE_RESET]);
    if (action.type === FIXTURE_ALL_FIXTURE_RESET) {
      yield cancel(task);
    }
  } catch (error) {
    yield put(getAllFixturesFail(error));
  }
}

export function* watchGetAllFixtures() {
  yield takeLatest(FIXTURE_GET_ALL_FIXTURE, getAllFixtures);
}

// function* getCompetitionDetail() {}

function* resetFixturesSate() {
  yield put(resetFixturesState());
}

export function* watchResetFixturesState() {
  yield takeLatest(FIXTURE_ALL_FIXTURE_RESET, resetFixturesSate);
}

export function* watchGetCompetitionDetail() {}
