import { 
    GETTING_USER_DATA,
    RECEIVE_USER_DATA,
    REGISTER_NEW_USER,
    UPDATE_NEW_USER_STAGE,
    UPDATE_USER_DATA
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

                //TODO: Deprecate, this use of this needs to be replaced with a character data check.
            });
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                battletag: action.payload.battletag,
                id: action.payload.id
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
        default:
            return state;
    }
}

export default user;