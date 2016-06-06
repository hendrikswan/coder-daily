import ReactDom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router } from 'react-router';
import store from './store';
import { Provider } from 'react-redux';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import DevTools from './containers/DevTools';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <div>
                <Router history={history} routes={routes} />

            </div>
        </Provider>
    </MuiThemeProvider>
), document.getElementById('app'));
