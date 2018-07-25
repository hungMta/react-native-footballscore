import { all } from "redux-saga/effects";

import { watchGetAllCompetititon } from "./competition";
import { watchGetAllFixtures } from "./fixture";
import { watchGetNews } from "./news";
import { watchGetLeagueTable } from "./leagueTable";

export default function* rootSaga() {
  yield all([
    watchGetAllCompetititon(),
    watchGetAllFixtures(),
    watchGetNews(),
    watchGetLeagueTable()
  ]);
}
