import { actionTypes } from "./actions";

export interface SearchItemInterface {
  starCount: number;
  fullName: string;
  avatar: string;
  picked: boolean;
  repoLink: string;
  id: number;
}

export interface StateInterface {
  searchResults: SearchItemInterface[];
  inProgress: boolean;
  error: boolean;
}

const initialState: StateInterface = {
  searchResults: [],
  inProgress: false,
  error: false
};

const toggleItem = (
  state: StateInterface,
  toggledItem: SearchItemInterface
) => {
  const findAndToggleSearchResult = (searchItem: SearchItemInterface) => {
    if (searchItem.id === toggledItem.id) {
      return {
        ...searchItem,
        picked: !searchItem.picked
      };
    } else {
      return searchItem;
    }
  };
  return {
    searchResults: state.searchResults.map(findAndToggleSearchResult)
  };
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ITEM:
      return toggleItem(state, action.payload);
    case actionTypes.UPDATE_SEARCH_RESULTS_SUCCEEDED:
      return {
        ...state,
        searchResults: action.payload,
        inProgress: false,
        error: false
      };
    case actionTypes.UPDATE_SEARCH_RESULTS_STARTED:
      return {
        ...initialState,
        inProgress: true
      };
    case actionTypes.UPDATE_SEARCH_RESULTS_FAILED:
      return {
        ...state,
        inProgress: false,
        error: true
      };
    default:
      return state;
  }
};
