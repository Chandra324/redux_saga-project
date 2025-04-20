import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { buyMobile, getAllUsers, getSingleUser, sellMobile ,addUser, editUser,deleteUser} from "./mobileaction"
 function MobileDetails(buyMobile,sellMobile,noOfMobiles,users,getAllUsers,getSingleUser,addUser,editUser){
    buyMobile,
    sellMobile,
    noOfMobiles,
    users,getAllUsers,
    getSingleUser,
    addUser,editUser,deleteUser
    return(
        <div>
        <h1>Number of Mobile Details({noOfMobiles}and Users{users.length} and Details {user.name},addUser,editUser)</h1>
        <button onClick={()=>buyMobile()}>BUYMOBILE</button>
        <button onClick={()=>sellMobile()}>SELLMOBILE</button>
        <button onClick={()=>addUser()}>ADD</button>
        <button onClick={()=>getAllUsers()}>Get All Users</button>
        <button onClick={()=>getSingleUser()}>Get All single Users</button>
        <button onClick={()=>editUser({name:'chandra'},1)}>Edit</button>

         <button onClick={()=>deleteUser(1)}>Delete User</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    console.log(state.users);
    return{
      
         noOfMobiles:state.noOfMobiles,
         users:state.users,
         user:state.user,
        
    }
}
const mapDispatchToProps=(dispatch)=>{
 return bindActionCreators ({
    buyMobile,
    sellMobile,
    getAllUsers,
    getSingleUser,
    addUser,
    editUser,
    deleteUser,
},dispatch)
}
export default connect(mapDispatchToProps,mapDispatchToProps)(MobileDetails)