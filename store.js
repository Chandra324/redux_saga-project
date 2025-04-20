import {applyMiddleware,createStore} from "redux";
import { mobileReducer } from "./mobile";
import createSagaMiddleware from "redux-saga";
import { watchUsers } from "../sagas/users.sagas";

const sagaMiddleware=createSagaMiddleware();
export const store=createStore(mobileReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUsers)



