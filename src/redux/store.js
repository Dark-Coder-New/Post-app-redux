import { createStore, applyMiddleware } from "redux"; 
import postReducer from "./reducer/postReducer"; 
import thunk from "redux-thunk";


// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     post: postReducer
// })


const store = createStore(postReducer, applyMiddleware(thunk));

export default store;







