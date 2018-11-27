import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./actions";
import githubApiSearchHelper from "../utils/githubApiSearchHelper";
import { GithubSearchItemInterface } from "../utils/githubSearchItemInterface";

function selectDataFromSearchResult(searchItem: GithubSearchItemInterface) {
  return {
    starCount: searchItem.stargazers_count,
    fullName: searchItem.full_name,
    avatar: searchItem.owner.avatar_url,
    picked: false,
    id: searchItem.id
  };
}

function* runSearchRequest(action: any) {
  try {
    yield put({ type: actionTypes.UPDATE_SEARCH_RESULTS_STARTED });
    const searchResults = yield call(
      githubApiSearchHelper,
      action.payload.text
    );
    yield put({
      type: actionTypes.UPDATE_SEARCH_RESULTS_SUCCEEDED,
      payload: searchResults.map(selectDataFromSearchResult)
    });
  } catch (e) {
    yield put({ type: actionTypes.UPDATE_SEARCH_RESULTS_FAILED });
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.UPDATE_SEARCH_RESULTS, runSearchRequest);
}
