import ReactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from './store';
import { Provider } from 'react-redux';


injectTapEventPlugin();

ReactDom.render((
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
), document.getElementById('app'));
