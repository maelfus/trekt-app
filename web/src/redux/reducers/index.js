import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import reducers here
import userApp from './userApp';


// comma separated reducers in the object
export default (history) => combineReducers({
    router: connectRouter(history),
    userApp
});
