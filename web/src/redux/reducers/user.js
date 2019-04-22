import { 
    GETTING_USER_DATA,
    RECEIVE_USER_DATA,
    REGISTER_NEW_USER,
    UPDATE_NEW_USER_STAGE,
    UPDATE_ACCESS_TOKEN,
    UPDATE_BNET_DATA,
    UPDATE_USER_DATA,
} from '../actions';

const user = (state = {}, action) => {
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
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                //characters: action.payload.characters

                // add the replacement user object
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
        default:
            return state;
    }
}

export default user;