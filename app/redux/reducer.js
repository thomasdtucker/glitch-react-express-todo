import { combineReducers } from 'redux';
import * as Actions from './actions';
export const initialState = {
  dreams: [],
  httpResponseError: false,
  httpResponseStatusMessage: '',
};

export function dreamReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_DREAMS_SUCCESS:
      return {
        dreams: [...action.payload],
        httpResponseError: false,
        httpResponseStatusMessage: 'Get dreams success.',
      };
    case Actions.GET_DREAMS_ERROR:
      return {
        dreams: [],
        httpResponseError: true,
        httpResponseStatusMessage: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dreamReducer,
});

export default rootReducer;
