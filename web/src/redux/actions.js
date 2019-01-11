const GET_USER_DATA = "GET_USER_DATA";
export const get_user_data = id => ({
    type: GET_USER_DATA,
    payload: {
        userId: id
    }
});

const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const receive_user_data = (id, json) => ({
    type: RECEIVE_USER_DATA,
    payload: {
        userId: id,
        json
    }
});

const POST_USER_DATA = "POST_USER_DATA";
export const post_user_data = (id, userData) => ({
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