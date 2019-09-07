import * as types from '../constants/index'
import axios from 'axios'
import { LOAD_USER } from "../constants/index";

export const increment = () => {
    /*    return dispatch => {
            setTimeout(() => {
                dispatch({type: types.INCREMENT})

            } , 3000);
        }*/
    return {
        type:types.INCREMENT,
        payload:new Promise((resolve ,reject)=>{
            setTimeout(()=>{
                resolve('xxx');
            })
        })
    }
};

export const decrement = () => {
    return {
        type: types.DECREMENT
    }
};
/*

export const get_user = () => {
    /!* return dispatch => {
         dispatch(fetch_user_request());
         axios.get('https://randomuser.me/api/').then(res => {
             // console.log(res.data.results[0])
             dispatch(fetch_user(res.data.results[0]))
         })
             .catch(error => {
                 dispatch(fetch_user_failure(error.response.data))
             })
     }*!/
    return {
        type: types.LOAD_USER ,
        payload: {
            promise: axios.get('https://randomuser.me/api')
        }
    }
};

export const fetch_user=(user)=>{
    return{
        type:types.FETCH_USER_SUCCESS,
        user
    }
}

export const fetch_user_request=()=>{
    return{
        type:types.FETCH_USER_REQUEST,
    }
}

export const fetch_user_failure=(error)=>{
    return{
        type:types.FETCH_USER_FAILURE,
        error
    }
}
*/

export const get_user=()=>{
    return {
        type:LOAD_USER,
        payload:{
            promise:axios.get('https://randomuser.me/api/')
        }
    }
}
