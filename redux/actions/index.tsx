import {
  GetItemFailurePayload,
  GetItemSuccessPayload,
  GetItemRequest,
  GetItemSuccess,
  GetItemFailure,
  GetItemFilter,
  RemoveSearchQueryList,
  GetItemFilterPayload,
} from '../types';
import {
  GET_ITEM_FAILURE,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FILTER,
  REMOVE_SEARCH_QUERY_LIST,
} from './actionType';

export const getItemRequest = (): GetItemRequest => ({
  type: GET_ITEM_REQUEST,
});

export const getItemSuccess = (
  payload: GetItemSuccessPayload,
): GetItemSuccess => ({
  type: GET_ITEM_SUCCESS,
  payload,
});

export const getItemFailure = (
  payload: GetItemFailurePayload,
): GetItemFailure => ({
  type: GET_ITEM_FAILURE,
  payload,
});

export const getItemFilter = (
  payload: GetItemFilterPayload,
): GetItemFilter => ({
  type: GET_ITEM_FILTER,
  payload,
});

export const removeSearchQueryList = (): RemoveSearchQueryList => ({
  type: REMOVE_SEARCH_QUERY_LIST,
});
