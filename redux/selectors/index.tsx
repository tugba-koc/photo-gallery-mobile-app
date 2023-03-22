import {AppState} from '../reducers/root';

export const selectItems = (state: AppState) => state.item.items;

export const selectFilteredItems = (state: AppState) =>
  state.item.filteredItems;

export const selectSearchQuery = (state: AppState) => state.item.searchQuery;

export const selectSearchQueryList = (state: AppState) =>
  state.item.searchQueryList;

export const selectLoading = (state: AppState) => state.item.loading;

export const selectError = (state: AppState) => state.item.error;
