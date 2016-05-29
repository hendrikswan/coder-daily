import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
const routerMiddleware = createRouterMiddleware(browserHistory);
import DevTools from './containers/DevTools';

const loggerMiddleware = createLogger();


export default createStore(reducers,
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware
        ),
        DevTools.instrument()
    )
);
