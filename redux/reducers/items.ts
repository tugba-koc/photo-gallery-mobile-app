import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  GET_ITEM_FILTER,
  REMOVE_SEARCH_QUERY_LIST,
} from '../actions/actionType';
import {v4 as uuidv4} from 'uuid';
import {IAction, IState} from '../types';
import {AppState} from './root';

const initialState: IState = {
  items: [],
  filteredItems: [],
  searchQuery: '',
  searchQueryList: [],
  loading: false,
  error: null,
};

export default function items(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
      };
    case GET_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_ITEM_FILTER:
      return {
        ...state,
        loading: false,
        searchQuery: action.payload.query,
        searchQueryList: [action.payload.query, ...state.searchQueryList],
        filteredItems: state.items?.filter(item =>
          item?.data?.title
            ?.toLowerCase()
            .includes(action.payload.query.toLowerCase()),
        ),
      };
    case REMOVE_SEARCH_QUERY_LIST:
      return {
        ...state,
        searchQueryList: [],
      };
    default:
      return state;
  }
}

// filter items sccording to its id.
export const selectLastSearchItemsWithText = (state: AppState) =>
  state.item?.searchQueryList?.filter(
    (item: string, index: number) =>
      item !== '' && state.item?.searchQueryList.indexOf(item) === index,
  );
