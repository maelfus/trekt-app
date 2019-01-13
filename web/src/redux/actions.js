import { access } from "fs";

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

export const POST_USER_DATA = "POST_USER_DATA";
const post_user_data = (id, userData) => ({
    type: POST_USER_DATA,
    payload: {
        userId: id,
        userData
    }
});

export function getUserData(id) {
    return function(dispatch) {
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
const update_access_token = ( accessToken, expiry ) => ({
    type: UPDATE_ACCESS_TOKEN,
    payload: {
        accessToken: accessToken,
        expiresIn: expiry
    }
})

export const UPDATE_BNET_DATA = "UPDATE_BNET_DATA";
const update_bnet_data = ( json ) => ({
    type: UPDATE_BNET_DATA,
    payload: {
        battletag: json.battletag,
        id: json.id
    }
})

export function bnetLogIn(accessToken, expiry) {
    return function(dispatch) {
        dispatch(update_access_token(accessToken, expiry))
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
                json => dispatch(update_bnet_data(json))
            )
    }
}