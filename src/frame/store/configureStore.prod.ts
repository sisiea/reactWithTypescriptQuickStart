import { createStore, applyMiddleware } from 'redux'
// imp
import rootReducer from '../reducers'

export const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState
)
