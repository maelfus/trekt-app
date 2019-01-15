export const GETTING_USER_DATA = "GETTING_USER_DATA";
const getting_user_data = () => ({
    type: GETTING_USER_DATA,
    payload: {
        status: 'fetching user'
    }
});

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
const receive_user_data = ( json ) => ({
    type: RECEIVE_USER_DATA,
    payload: {
        status: 'ready',
        json
    }
});

export const REGISTER_NEW_USER = "REGISTER_NEW_USER";
const register_new_user = (id) => ({
    type: REGISTER_NEW_USER,
    payload: {
        status: 'new registration',
        newUserStage: 1
    }
});

export const UPDATE_NEW_USER_STAGE = "UPDATE_NEW_USER_STAGE";
export const update_new_user_stage = ( stage ) => ({
    type: UPDATE_NEW_USER_STAGE,
    payload: {
        newUserStage: stage
    }
})

export function getUserData(id) {
    return (dispatch) => {
        dispatch(getting_user_data())
        return fetch(`http://localhost:3005/api/user/${id}`)
            .then (
                response => response.json(),
                error => console.error(`Error fetching listing: ${id} - ${error}`)
            )
            .then (
                // If there is no matching user in the database, register a new user, else send data to the store
                json => json === null ? dispatch(register_new_user(id)) : dispatch(receive_user_data(json))
            )
    }
};

export const UPDATE_ACCESS_TOKEN = "UPDATE_ACCESS_TOKEN";
const update_access_token = ( accessToken ) => ({
    type: UPDATE_ACCESS_TOKEN,
    payload: {
        accessToken: accessToken
    }
})

export const UPDATE_BNET_DATA = "UPDATE_BNET_DATA";
const update_bnet_data = ( battletag, id ) => ({
    type: UPDATE_BNET_DATA,
    payload: {
        battletag: battletag,
        id: id
    }
})

export function bnetLogIn(accessToken) {
    return (dispatch) => {
        dispatch(update_access_token(accessToken))
        return fetch('https://us.battle.net/oauth/userinfo', {
            method: "GET",
            headers: { 
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${accessToken}`
            }
        })
            .then(
                response => response.json(),
                error => console.error(`Error retrieving user info: ${error}`)
            )
            .then(
                json => dispatch(update_bnet_data(json.battletag, json.id))
            )
    }
}

export const GETTING_BNET_CHARACTER_DATA = 'GETTING_BNET_CHARACTER_DATA';
const getting_bnet_character_data = () => ({
    type: GETTING_BNET_CHARACTER_DATA,
    payload: {
        status: 'fetching'
    }
})

export const UPDATE_NEW_CHARACTER_LIST = 'UPDATE_NEW_CHARACTER_LIST';
const update_new_character_list = ( characters ) => ({
    type: UPDATE_NEW_CHARACTER_LIST,
    payload: {
        status: 'done',
        newCharacterList: characters
    }
})

// This function will need a slight rewrite when ready to add new characters to a users list
export function fetchCharacters(accessToken) {
    return async (dispatch) => {
        dispatch(getting_bnet_character_data());
        const response = await fetch(`https://us.api.blizzard.com/wow/user/characters?access_token=${accessToken}`)
        const body = await response.json();
        let characters = [];
        body.characters.forEach( (char) => char.level === 120 ? characters.push(char): null)
        return dispatch(update_new_character_list(characters))
    }
}

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const update_user_data = ( newCharacterData ) => ({
    type: UPDATE_USER_DATA,
    payload: {
        characters: newCharacterData
    }
})

export function updateCharacterList( oldCharacterData, newCharacterList ) {
    return (dispatch) => {
        const newCharacterData = Object.assign({}, oldCharacterData, {
            characters: newCharacterList
        })
        dispatch(update_user_data(newCharacterData))
    }
}

export const DELETE_NEW_CHARACTER_LIST = 'DELETE_NEW_CHARACTER_LIST';
export const delete_new_character_list = () => ({
    type: DELETE_NEW_CHARACTER_LIST
})

export function deleteNewCharacterList( ) {
    return (dispatch) => {
        dispatch(delete_new_character_list());
    }
}