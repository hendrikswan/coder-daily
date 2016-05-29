import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
const routerMiddleware = createRouterMiddleware(browserHistory);

const loggerMiddleware = createLogger();


export default createStore(reducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    routerMiddleware
));
