import {AppState} from '../reducers/root';

export const selectItems = (state: AppState) => state.item.items;

export const selectLoading = (state: AppState) => state.item.loading;

export const selectError = (state: AppState) => state.item.error;
