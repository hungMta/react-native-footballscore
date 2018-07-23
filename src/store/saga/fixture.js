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
  FIXTURE_FIXTURE_DETAIL_RESET,
  FIXTURE_GET_ALL_FIXTURE,
  FIXTURE_GET_ALL_FIXTURE_FAIL,
  FIXTURE_GET_ALL_FIXTURE_SUCCESS,
  FIXTURE_GET_FIXTURE_DETAIL,
  FIXTURE_GET_FIXTURE_DETAIL_FAIL,
  FIXTURE_GET_FIXTURE_DETAIL_SUCCESS
} from "../../constants/types";

function* fetchDataAllFixtures(idCompetition) {
  try {
    console.log("fetchDataAllFixtures");
    const data = yield call(
      fetchData,
      "competitions/" + idCompetition + "/fixtures"
    );
    console.log("saga data: ", data);
    yield put({ type: FIXTURE_GET_ALL_FIXTURE_SUCCESS, data });
  } catch (error) {
    console.log("saga");
    console.log(error);
    yield put({
      type: FIXTURE_GET_ALL_FIXTURE_FAIL,
      errMsg: "Something went wrong!"
    });
  }
}

function* getAllFixtures(action) {
  const idCompetition = action.idCompetition;
  console.log("getAllFixtures");
  console.log(idCompetition);
  try {
    const task = yield fork(fetchDataAllFixtures, idCompetition);
    const action = yield take([FIXTURE_ALL_FIXTURE_RESET]);
    if (action.type === FIXTURE_ALL_FIXTURE_RESET) {
      yield cancel(task);
    }
  } catch (error) {
    console.log("error = ", error);
    yield put({ type: FIXTURE_GET_ALL_FIXTURE_FAIL, error });
  }
}

export function* watchGetAllFixtures() {
  console.log("watchGetAllFixtures");
  yield takeLatest(FIXTURE_GET_ALL_FIXTURE, getAllFixtures);
}

// function* getCompetitionDetail() {}

function* resetFixturesSate() {
  yield put({ type: FIXTURE_ALL_FIXTURE_RESET });
}

export function* watchResetFixturesState() {
  yield takeLatest(FIXTURE_ALL_FIXTURE_RESET, resetFixturesSate);
}

export function* watchGetCompetitionDetail() {}
