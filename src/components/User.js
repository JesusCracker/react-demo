import React , { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {get_user} from "../actions";

class User extends Component {
    render() {
        const {get_user}=this.props;
        const {isFetching,error,user}=this.props.userInfo;

        console.dir(user);

        let showData='';
        if(isFetching){
            showData='Loading...'
        }else if(error){
            showData=error;
        }else if(user){
            showData=user.email;
        }

        return (
            <div  className='text-center'>
               <h3>{showData}</h3>
                <button onClick={get_user} className='btn btn-success'>GET USER EMAIL</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        userInfo: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({get_user} , dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(User);