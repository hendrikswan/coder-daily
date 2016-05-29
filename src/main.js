import ReactDom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import DevTools from './containers/DevTools';

const history = syncHistoryWithStore(browserHistory, store);
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


ReactDom.render((
    // <Router
    //     history={hashHistory}
    // >
    //     <Route path="/" component={App}>
    //         <IndexRoute component={LinkList} />
    //         <Route path="/list" component={LinkList} />
    //         <Route path="/add" component={Form} />
    //     </Route>
    // </Router>

    <Provider store={store}>
        <div>
            <Router history={history} routes={routes} />
        </div>
    </Provider>
), document.getElementById('app'));
