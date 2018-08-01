import { all } from "redux-saga/effects";

import { watchGetAllCompetititon } from "./competition";
import { watchGetAllFixtures } from "./fixture";
import { watchGetNews } from "./news";
import { watchGetLeagueTable } from "./leagueTable";
import {
  watchLoginRequest,
  watchLogoutRequest,
  watchCheckLogined
} from "./login";

export default function* rootSaga() {
  yield all([
    watchGetAllCompetititon(),
    watchGetAllFixtures(),
    watchGetNews(),
    watchGetLeagueTable(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchCheckLogined()
  ]);
}
