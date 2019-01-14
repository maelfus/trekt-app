export const GET_USER_DATA = "GET_USER_DATA";
const get_user_data = id => ({
    type: GET_USER_DATA,
    payload: {
        userId: id
    }
});

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
const receive_user_data = (id, json) => ({
    type: RECEIVE_USER_DATA,
    payload: {
        userId: id,
        json
    }
});

export function getUserData(id) {
    return (dispatch) => {
        dispatch(get_user_data(id))
        return fetch(`http://localhost:3005/api/user/${id}`)
            .then (
                // (NYI) Verify that appropriate data was actually returned
                response => response.json(),
                error => console.error(`Error fetching listing: ${id} - ${error}`)
            )
            .then (
                json => dispatch(receive_user_data(id, json))
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

export const GET_CHARACTER_DATA = 'GET_CHARACTER_DATA';
const get_character_data = () => ({
    type: GET_CHARACTER_DATA,
    payload: {
        status: 'updating'
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

export function updateUser(accessToken, id) {
    return async (dispatch) => {
        dispatch(get_character_data());
        const response = await fetch(`https://us.api.blizzard.com/wow/user/characters?access_token=${accessToken}`)
        const body = await response.json();
        let characters = [];
        body.characters.forEach( (char) => char.level === 120 ? characters.push(char): null)
        return dispatch(update_new_character_list(characters))
    }
}

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
const update_user_data = ( userData ) => ({
    type: UPDATE_USER_DATA,
    payload: {
        userData: userData
    }
})

export function updateCharacterList( userData, characters ) {
    return (dispatch) => {
        const newUserData = Object.assign({}, userData, {
            characters: characters
        })
        dispatch(update_user_data(newUserData))
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