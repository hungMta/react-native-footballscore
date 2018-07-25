import {
  LEAGUE_TABLE_GET,
  RESET_LEAGUE_TABLE_STATE
} from "../../constants/types";
import { takeLatest, call, fork, take, cancel, put } from "redux-saga/effects";
import fetchData from "../api/index";
import {
  getLeagueTableSuccess,
  getLeagueTableFail,
  resetLeagueTableState
} from "../action/leagueTable";

function* fetchLeagueTableData(idCompetition) {
  try {
    const path = "competitions/" + idCompetition + "/leagueTable";
    const data = yield call(fetchData, path);
    yield put(getLeagueTableSuccess(data));
  } catch (error) {
    yield put(getLeagueTableFail("Something went wrong!"));
  }
}

export function* getLeagueTable(actionCompetition) {
  try {
    const task = yield fork(
      fetchLeagueTableData,
      actionCompetition.idCompetition
    );
    const action = yield take([RESET_LEAGUE_TABLE_STATE]);
    if (action.type === RESET_LEAGUE_TABLE_STATE) {
      yield cancel(task);
    }
  } catch (error) {
    yield put(getLeagueTableFail("Something went wrong!"));
  }
}

export function* watchGetLeagueTable() {
  yield takeLatest(LEAGUE_TABLE_GET, getLeagueTable);
}
