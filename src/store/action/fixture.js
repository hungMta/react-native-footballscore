import {
  FIXTURE_GET_ALL_FIXTURE,
  FIXTURE_GET_FIXTURE_DETAIL,
  FIXTURE_ALL_FIXTURE_RESET,
  FIXTURE_GET_ALL_FIXTURE_SUCCESS,
  FIXTURE_GET_FIXTURE_DETAIL_FAIL
} from "../../constants/types";

export const getAllFixtures = idCompetition => ({
  type: FIXTURE_GET_ALL_FIXTURE,
  idCompetition: idCompetition
});
export const getFixturesDetail = (...args) => ({
  type: FIXTURE_GET_FIXTURE_DETAIL,
  args
});

export const resetFixturesState = () => ({
  type: FIXTURE_ALL_FIXTURE_RESET
});

export const getAllFixturesSuccess = data => ({
  type: FIXTURE_GET_ALL_FIXTURE_SUCCESS,
  data
});

export const getAllFixturesFail = error => ({
  type: FIXTURE_GET_ALL_FIXTURE_FAIL,
  errMsg: "Something went wrong!"
});
