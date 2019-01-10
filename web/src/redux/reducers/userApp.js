import { 
    GET_USER_DATA
} from '../actions';

const userApp = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return Object.assign({}, state, {
               status: 'fetching' 
            });

        default:
            return state;
    }
}

export default userApp;