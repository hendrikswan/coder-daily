import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/AppContainer';
import LinkList from '../containers/LinkListContainer';
import Form from '../components/Form';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LinkList} />
        <Route path="/list" component={LinkList} />
        <Route path="/add" component={Form} />
    </Route>
);
