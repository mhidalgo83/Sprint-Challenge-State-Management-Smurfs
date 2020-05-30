import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  SUBMIT_SMURF_SUCCESS,
  SUBMIT_SMURF_FAILURE,
} from "../actions";

const initialState = { isFetching: false, error: "", smurfs: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, error: "", isFetching: true };
    case FETCH_SMURFS_SUCCESS:
      return { ...state, smurfs: action.payload, isFetching: false };
    case FETCH_SMURFS_FAILURE:
      return { ...state, error: action.payload, isFetching: false };
    case SUBMIT_SMURF_SUCCESS:
      return { ...state, error: "", isFetching: false };
    case SUBMIT_SMURF_FAILURE:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};
