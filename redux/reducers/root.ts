import {combineReducers} from 'redux';
import items from './items';

const rootReducer = combineReducers({
  item: items,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
