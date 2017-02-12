import { combineReducers } from 'redux'

// Action types
export const RESET = 'app/reset'
export const NEXT_PAGE = 'hat/wizard/NEXT_PAGE'
export const PREVIOUS_PAGE = 'hat/wizard/PREVIOUS_PAGE'

// Reducer
export const initialState = {
  status: 2,
  messages: '',
  data: []
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return initialState

  }
  return state
}

const secondaryReducer = (state = {}, action) => {
  return state
}

const appReducer = combineReducers({
  mainReducer,
  secondaryReducer
})

export default appReducer
