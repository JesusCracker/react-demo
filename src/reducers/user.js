import { LOAD_USER_FULFILLED , LOAD_USER_PENDING , LOAD_USER_REJECTED } from '../constants'

const initState={
    isFetching:false,
    error:null,
    user:{}
}


const user = (state = {initState} , action = {}) => {
    switch (action.type) {
        case LOAD_USER_FULFILLED:
            // console.dir(action.payload.data.results[0]);
            return {
                isFetching:false,
                error:null,
                user: action.payload.data.results[0]
            };
        case LOAD_USER_PENDING:
            return {
                isFetching: true,
                error: null,
                user: {}
            };
        case LOAD_USER_REJECTED:
            return {
                isFetching: false,
                error: action.payload.response.data,
                user: {}
            };
        default:
            return state;
    }
};

export default user;