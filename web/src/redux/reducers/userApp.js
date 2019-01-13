import { 
    GET_USER_DATA,
    RECEIVE_USER_DATA,
    POST_USER_DATA,
    UPDATE_ACCESS_TOKEN,
    UPDATE_BNET_DATA
} from '../actions';

const userApp = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return Object.assign({}, state, {
               status: 'fetching' 
            });
        case RECEIVE_USER_DATA:
            return Object.assign({}, state, {
                status: 'done',
                userData: action.payload.json
            });
        case POST_USER_DATA:
            return Object.assign({}, state, {
                status: 'posting'
            });
        case UPDATE_ACCESS_TOKEN:
            return Object.assign({}, state, {
                accessToken: action.payload.accessToken,
                expiresIn: action.payload.expiresIn
            });
        case UPDATE_BNET_DATA:
            return Object.assign({}, state, {
                battletag: action.payload.battletag,
                id: action.payload.id
            });
        default:
            return state;
    }
}

export default userApp;