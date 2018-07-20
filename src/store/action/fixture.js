import {
  FIXTURE_GET_ALL_FIXTURE,
  FIXTURE_GET_FIXTURE_DETAIL
} from "../../constants/types";

export const getAllFixtures = (...args) => ({
  type: FIXTURE_GET_ALL_FIXTURE,
  args
});
export const getFixturesDetail = (...args) => ({
  type: FIXTURE_GET_FIXTURE_DETAIL,
  args
});
