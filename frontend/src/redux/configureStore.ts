import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (initialState: Object) => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk)));
};

export default configureStore
;
