import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {carReducer} from './reducers/carReducer'
import {alertReducer} from './reducers/alertReducer'
const rootReducer = combineReducers({
    carReducer,
    alertReducer
    
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...[thunk]))
);


export default store;