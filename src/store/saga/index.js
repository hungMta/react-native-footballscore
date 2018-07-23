import { all } from "redux-saga/effects";

import { watchGetAllCompetititon } from "./competition";
import { watchGetAllFixtures } from "./fixture";

export default function* rootSaga() {
  yield all([watchGetAllCompetititon(), watchGetAllFixtures()]);
}
