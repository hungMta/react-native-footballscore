import {
  LEAGUE_TABLE_GET,
  LEAGUE_TABLE_GET_SUCCESS,
  LEAGUE_TABLE_GET_FAIL,
  RESET_LEAGUE_TABLE_STATE
} from "../../constants/types";
export const getLeagueTable = (idCompetition) => ({ type: LEAGUE_TABLE_GET, idCompetition });

export const getLeagueTableSuccess = data => ({
  type: LEAGUE_TABLE_GET_SUCCESS,
  data
});

export const getLeagueTableFail = error => ({
  type: LEAGUE_TABLE_GET_FAIL,
  errMsg: error
});

export const resetLeagueTableState = () => ({
  type: RESET_LEAGUE_TABLE_STATE
});
