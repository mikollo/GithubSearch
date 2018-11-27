import { createAction } from "redux-actions";

const actionTypes = {
  TOGGLE_ITEM: "TOGGLE_ITEM",
  UPDATE_SEARCH_RESULTS: "UPDATE_SEARCH_RESULTS",
  UPDATE_SEARCH_RESULTS_SUCCEEDED: "UPDATE_SEARCH_RESULTS_SUCCEEDED",
  UPDATE_SEARCH_RESULTS_FAILED: "UPDATE_SEARCH_RESULTS_FAILED",
  UPDATE_SEARCH_RESULTS_STARTED: "UPDATE_SEARCH_RESULTS_STARTED"
};

const actions = {
  toggleItem: createAction(actionTypes.TOGGLE_ITEM),
  updateSearchResults: createAction(actionTypes.UPDATE_SEARCH_RESULTS)
};

export { actionTypes, actions };
