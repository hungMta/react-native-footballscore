import { all } from "redux-saga/effects";

import { watchGetAllCompetititon } from "./competition";

export default function* rootSaga() {
  yield all([watchGetAllCompetititon()]);
}
