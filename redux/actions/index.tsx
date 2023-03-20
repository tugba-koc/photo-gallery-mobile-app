import {
  GetItemFailurePayload,
  GetItemSuccessPayload,
  GetItemRequest,
  GetItemSuccess,
  GetItemFailure,
} from '../types';
import {
  GET_ITEM_FAILURE,
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
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
