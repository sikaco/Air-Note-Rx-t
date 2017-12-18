import { browserHistory } from 'react-router'
import { Dispatch } from 'redux'
import { StoreState } from '../types/index'
import { Store } from 'redux'
import { Action } from 'redux'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
interface LocationChangeAction {
  type: string
  payload: string
}
export function locationChange(location = '/'): LocationChangeAction {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }: Store<StoreState>) => {
  return (nextLocation: string) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = browserHistory.getCurrentLocation()
export default function locationReducer(state = initialState, action: Action) {
  return action.type === LOCATION_CHANGE ? action.payload : state
}
