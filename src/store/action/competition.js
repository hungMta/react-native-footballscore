import {
  COMPETITION_GET_ALL_COMPETITON,
  COMPETITION_GET_COMPETITION_DETAIL,
  COMPETITION_GET_COMPETITION_DETAIL_RESET_SATE,
  COMPETITION_GET_ALL_RESET_SATE,
  COMPETITION_GET_ALL_FAIL, COMPETITION_GET_ALL_SUCCESS
} from "../../constants/types";

export function getAllCompetition() {
  return {
    type: COMPETITION_GET_ALL_COMPETITON
  };
}

export function getCompetition(...args) {
  return {
    type: COMPETITION_GET_COMPETITION_DETAIL,
    args
  };
}

export function resetCompetitionState() {
  return {
    type: COMPETITION_GET_ALL_RESET_SATE
  };
}

export function getAllCompetitionSuccess(data) {
  return {
    type: COMPETITION_GET_ALL_SUCCESS,
    data
  };
}

export function getAllCompetitionFail(error) {
  return { type: COMPETITION_GET_ALL_FAIL, error };
}
