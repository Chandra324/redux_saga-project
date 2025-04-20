const intialContacts={
    noOfMobiles:10,
    users:[],
    user:[],
}
export const mobileReducer=(state,action)=>{
    switch(action.type){
        case 'BUY_MOBILE_SUCESS':
            return{...state, noOfMobiles:state.noOfMobiles-1};
        case'SELL_MOBILE_SUCESS':
             return{...state,noOfMobiles:state.noOfMobiles+1};
        case'GET_ALL_USERS_SUCCESS':
             return{...state,users:action.data};     
        case'GET_ALL_USERS_FAILED':
             return{...state,massege:action.massege};     
        case 'GET_SINGLE_USER':
            return{...state,users:action.data};
        case 'GET_SINGLE_USER_FAILED':
            return{...state,massege:action.massege}; 
            
         case 'ADD_USER_sUCCESS':{
            let users=[...state.users];
            users.push(action.data);
            return{...state,users};}
        case 'ADD_USER_FAILED':
            return{...state,massege:action.massege};    

    case 'EDIT_USER_sUCCESS':{
        let users=[...state.users];
        let findIndex=users.findIndex(user=>user.id===action.data.id)
        users[findIndex]=action.data;
    
        return{...state,users};}
    case 'EDIT_USER_FAILED':
        return{...state,massege:action.massege};   
        
        case 'DELETE_USER_sUCCESS':{
            let users=[...state.users];
            let findIndex=users.findIndex(user=>user.id===action.data)
             users.splice(findIndex,1)
            return{...state,users};}
        case 'EDIT_USER_FAILED':
            return{...state,massege:action.massege};   

         default:
            return state;    
    }};

