import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import ListReducer from "./redux/reducers/ListReducer";

const rootReducer = combineReducers({
  ListReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
