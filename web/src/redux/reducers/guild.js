import {
    RECEIVE_GUILD_DATA
} from '../actions';

const guild = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_GUILD_DATA:
            // Will need to update this as I figure out exactly what data to store
            return Object.assign({}, state, action.payload);
        default: 
            return state;
    }
}

export default guild;