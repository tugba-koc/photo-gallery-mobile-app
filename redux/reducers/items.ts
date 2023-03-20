import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAILURE,
} from '../actions/actionType';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function items(state = initialState, action) {
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
    default:
      return state;
  }
}
