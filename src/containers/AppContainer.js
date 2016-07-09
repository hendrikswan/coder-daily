import { connect } from 'react-redux';
import App from '../components/App';
import { init } from '../actions';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () =>
            dispatch(init()),
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
