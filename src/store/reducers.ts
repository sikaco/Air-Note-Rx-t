import { combineReducers } from 'redux'
import locationReducer from './location'
import { Reducer } from 'redux'
import { StoreState } from '../types/index'

export const makeRootReducer = (asyncReducers = {}): Reducer<StoreState> => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store: StoreState, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
    return
  }

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
