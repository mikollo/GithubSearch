import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./actions";
import githubApiSearchHelper from "../utils/githubApiSearchHelper";
import { sortSearchResults, selectDataFromSearchResult } from "./utils";

function* runSearchRequest(action: any) {
  try {
    yield put({ type: actionTypes.UPDATE_SEARCH_RESULTS_STARTED });
    const searchResults = yield call(githubApiSearchHelper, action.payload);
    yield put({
      type: actionTypes.UPDATE_SEARCH_RESULTS_SUCCEEDED,
      payload: searchResults
        .sort(sortSearchResults)
        .map(selectDataFromSearchResult)
    });
  } catch (e) {
    yield put({ type: actionTypes.UPDATE_SEARCH_RESULTS_FAILED });
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.UPDATE_SEARCH_RESULTS, runSearchRequest);
}
