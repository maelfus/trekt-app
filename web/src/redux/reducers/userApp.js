import { 
    GET_USER_DATA,
    RECEIVE_USER_DATA,
    UPDATE_ACCESS_TOKEN,
    UPDATE_BNET_DATA,
    GET_CHARACTER_DATA,
    UPDATE_NEW_CHARACTER_LIST,
    UPDATE_USER_DATA,
    DELETE_NEW_CHARACTER_LIST
} from '../actions';

const userApp = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_DATA:
            return Object.assign({}, state, {
               status: action.payload.status
            });
        case RECEIVE_USER_DATA:
            return Object.assign({}, state, {
                status: action.payload.status,
                userData: action.payload.json
            });
        case UPDATE_ACCESS_TOKEN:
            return Object.assign({}, state, {
                accessToken: action.payload.accessToken
            });
        case UPDATE_BNET_DATA:
            return Object.assign({}, state, {
                battletag: action.payload.battletag,
                id: action.payload.id
            });
        case GET_CHARACTER_DATA:
            return Object.assign({}, state, {
                status: action.payload.status
            })
        case UPDATE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                status: action.payload.status,
                newCharacterList: action.payload.newCharacterList
            })
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                userData: action.payload.userData
            })
        case DELETE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                newCharacterList: undefined
            })
        default:
            return state;
    }
}

export default userApp;