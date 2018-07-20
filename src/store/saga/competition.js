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
  COMPETITION_GET_COMPETITION_DETAIL,
  COMPETITION_GET_ALL_SUCCESS,
  COMPETITION_GET_ALL_FAIL,
  COMPETITION_GET_COMPETITION_DETAIL_FAIL,
  COMPETITION_GET_COMPETITION_DETAIL_SUCCESS,
  COMPETITION_GET_ALL_RESET_SATE,
  COMPETITION_GET_COMPETITION_DETAIL_RESET_SATE
} from "../../constants/types";

function* fetchDataAllCompetition() {
  try {
    const data = yield call(fetchData, "competitions");
    yield put({ type: COMPETITION_GET_ALL_SUCCESS, data });
  } catch (e) {
      console.log("saga")
      console.log(e)
    yield put({ type: COMPETITION_GET_ALL_FAIL, e });
  }
}

function* getAllCompetition() {
  console.log("getAllCompetition");
  try {
    const task = yield fork(fetchDataAllCompetition);
    const action = yield take([COMPETITION_GET_ALL_RESET_SATE]);
    if (action.type === COMPETITION_GET_ALL_RESET_SATE) {
      yield cancel(task);
    }
  } catch (error) {
    // console.log(error);
    yield put({ type: COMPETITION_GET_ALL_FAIL, error });
  }
}

export function* watchGetAllCompetititon() {
  yield takeLatest(COMPETITION_GET_ALL_COMPETITON, getAllCompetition);
}

function* getCompetitionDetail() {}

function* resetCompetitionState() {
  yield put({ type: COMPETITION_GET_ALL_RESET_SATE });
}

export function* watchResetCompetitionState() {
  yield takeLatest(COMPETITION_GET_ALL_RESET_SATE, resetCompetitionState);
}

export function* watchGetCompetitionDetail() {}
