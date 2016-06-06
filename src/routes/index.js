import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/AppContainer';
import LinkList from '../containers/LinkListContainer';
import Form from '../containers/FormContainer';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LinkList} />
        <Route path="/list/:selectedTopicName" component={LinkList} />
        <Route path="/list/:selectedTopicName/add" component={Form} />
    </Route>
);
