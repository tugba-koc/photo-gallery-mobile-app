import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
  GET_ITEM_FILTER,
} from '../actions/actionType';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  items: [],
  filteredItems: [],
  searchQuery: '',
  searchQueryList: [],
  loading: false,
  error: null,
};

export default function items(state = initialState, action) {
  console.log('action.payload.query', action.payload);

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
        error: action.error,
      };
    case GET_ITEM_FILTER:
      return {
        ...state,
        loading: false,
        searchQuery: action.payload.query,
        searchQueryList: [
          ...state.searchQueryList,
          {item: action.payload.query, id: uuidv4()},
        ],
        filteredItems: state.items?.filter(item =>
          item?.data?.title
            ?.toLowerCase()
            .includes(action.payload.query.toLowerCase()),
        ),
      };
    default:
      return state;
  }
}
