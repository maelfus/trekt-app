import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                ReduxThunk,
                createLogger()
            )
        )
    )

    return store;
}