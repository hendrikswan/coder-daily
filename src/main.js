import ReactDom from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import AppContainer from './containers/AppContainer';
import LinkList from './components/LinkList';
import Form from './components/Form';
import store from './store';
import { Provider } from 'react-redux'

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
        <AppContainer />
    </Provider>
), document.getElementById('app'));
