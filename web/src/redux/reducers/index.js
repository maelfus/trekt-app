import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers here
import user from './user';


// comma separated reducers in the object
export default (history) => combineReducers({
    router: connectRouter(history),
    user
});
