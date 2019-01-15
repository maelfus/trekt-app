import { 
    GETTING_USER_DATA,
    RECEIVE_USER_DATA,
    REGISTER_NEW_USER,
    UPDATE_NEW_USER_STAGE,
    UPDATE_ACCESS_TOKEN,
    UPDATE_BNET_DATA,
    GETTING_BNET_CHARACTER_DATA,
    UPDATE_NEW_CHARACTER_LIST,
    UPDATE_USER_DATA,
    DELETE_NEW_CHARACTER_LIST,
} from '../actions';

const userApp = (state = {}, action) => {
    switch (action.type) {
        case GETTING_USER_DATA:
            return Object.assign({}, state, {
               status: action.payload.status
            });
        case RECEIVE_USER_DATA:
            return Object.assign({}, state, {
                status: action.payload.status,
                characters: action.payload.json.characters

                // Add additional db data stuff here as needed
                // This is called when pulling user data from the database
            });
        case REGISTER_NEW_USER:
            return Object.assign({}, state, {
                status: action.payload.status,
                newUserStage: action.payload.newUserStage
            });
        case UPDATE_NEW_USER_STAGE:
            return Object.assign({}, state, {
                newUserStage: action.payload.newUserStage
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
        case GETTING_BNET_CHARACTER_DATA:
            return Object.assign({}, state, {
                status: action.payload.status
            });
        case UPDATE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                status: action.payload.status,
                newCharacterList: action.payload.newCharacterList
            });
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                characters: action.payload.characters
            });
        case DELETE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                newCharacterList: undefined
            });
        default:
            return state;
    }
}

export default userApp;