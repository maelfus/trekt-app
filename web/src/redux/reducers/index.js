import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers here
import user from './user';
import guild from './guild';
import characters from './characters'


// comma separated reducers in the object
export default (history) => combineReducers({
    router: connectRouter(history),
    user,
    guild,
    characters
});
