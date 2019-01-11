import { 
    GET_USER_DATA,
    RECEIVE_USER_DATA,
    POST_USER_DATA
} from '../actions';

const userApp = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return Object.assign({}, state, {
               status: 'fetching' 
            });
        case RECEIVE_USER_DATA:
            return Object.assign({}, state, {
                status: 'received'
            });
        case POST_USER_DATA:
            return Object.assign({}, state, {
                status: 'posting'
            });
        default:
            return state;
    }
}

export default userApp;