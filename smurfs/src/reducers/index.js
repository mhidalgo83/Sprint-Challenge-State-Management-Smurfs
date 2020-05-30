import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
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
    default:
      return state;
  }
};
