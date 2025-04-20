import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { buyMobile, deleteUser } from "../Redux/mobileaction";
import { type } from "@testing-library/user-event/dist/type";
import axios     from 'axios'

function* buyMobile(){
    yield delay(400);

    yield put({type:'BUY_MOBILE_SUCESS'})
}
function* sellMobile(){
    yield delay(100);
    yield put({type:'SELL_MOBILE_SUCESS'});
}
function* getAllUsers(){
try{
let  users=yield call(axios.get,'')//GIVE URLLLLLLLLLLLLLLLLLLLL
yield put({type:'GET_ALL_USERS_SUCCESS',data:users.data})
}
catch(error){
    yield put({type:'GET_ALL_USERS_FAILED',message:error.message});
}
}
function* getAllUsers(){
try{
let  users=yield call(axios.get,'http:NewReactJs\redux\redux/users')//GIVE URLLLLLLLLLLLLLLLLLLLL
yield put({type:'GET_ALL_USERS_SUCCESS',data:users.data})
}
catch(error){
    yield put({type:'GET_ALL_USERS_FAILED',message:error.message});
}
}
function* getSingleUsers(id){
    try{
        let users=yield call(axios.get,'http:NewReactJs\redux\redux/users'+id)////url lllllllllllllll
        yield put({type:'GET_SINGLE_USERS_SUCCESS',data:users.data})
    }
    catch(error){
        yield put({type:'GET_SINGLE_USERS_FAILED',message:error.message});
    }
}
function* addUser(payload){
    try{
        let users=yield call(axios.post,'http:NewReactJs\redux\redux/users',payload)////url lllllllllllllll
        yield put({type:'GET_SINGLE_USERS_SUCCESS',data:users.data})
    }
    catch(error){
        yield put({type:'GET_SINGLE_USERS_FAILED',message:error.message});
    }
}

function* addUser({payload}){
    try{
        let users=yield call(axios.post,'http:NewReactJs\redux\redux/users',payload)////url lllllllllllllll
        yield put({type:'ADD_USERS_SUCCESS',data:users.data})
    }
    catch(error){
        yield put({type:'ADD_USERS_FAILED',message:error.message});
    }
}

function* editUser({payload,id}){
    try{
        let users=yield call(axios.put,'http:NewReactJs\redux\redux/users'+id,payload)////url lllllllllllllll
        yield put({type:'EDIT_USERS_SUCCESS',data:users.data})
    }
    catch(error){
        yield put({type:'EDIT_USERS_FAILED',message:error.message});
    }
}

function* deleteUser({id}){
    try{
        let users=yield call(axios.delete,'http:NewReactJs\redux\redux/users'+id)////url lllllllllllllll
        yield put({type:'DELETE_USERS_SUCCESS',data:id})
    }
    catch(error){
        yield put({type:'DELETE_USERS_FAILED',message:error.message});
    }
}

 export function * watchUsers(){
    yield all([ 
        takeEvery('BUY_MOBILE',buyMobile),
        takeLatest('SELL_MOBILE_SUCESS',sellMobile),
        takeLatest('GET_ALL_USERS',sellMobile),
        takeLatest('GET_ALL_USERS_SUCCESS',getSingleUsers),
        takeLatest('GET_SINGLE_USER',getSingleUsers),
        takeLatest('ADD_USER',addUser),
        takeLatest('EDIT_USER',editUser),
        takeLatest('DELETE_USER',deleteUser)
    ])
    }