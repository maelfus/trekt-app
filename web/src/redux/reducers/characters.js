import {
    UPDATE_CHARACTER_DATA,
    UPDATE_NEW_CHARACTER_LIST,
    DELETE_NEW_CHARACTER_LIST,
    GETTING_BNET_CHARACTER_DATA
} from '../actions';

const characters = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_CHARACTER_DATA:
            // Will need to update this as I figure out exactly what data to store
            return Object.assign({}, state, {
                characters: action.payload.characters
            });
        case UPDATE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                newCharacterList: action.payload.newCharacterList
            });
        case DELETE_NEW_CHARACTER_LIST:
            return Object.assign({}, state, {
                newCharacterList: undefined
            });
        case GETTING_BNET_CHARACTER_DATA:
            return Object.assign({}, state, {
                status: action.payload.status
            });
        default: 
            return state;
    }
}

export default characters;