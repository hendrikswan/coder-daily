import { connect } from 'react-redux';
import App from '../components/App';
import { init, checkAuth } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        initialized: state.main.initialized,
        selectedTopicName: ownProps.params.selectedTopicName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: () =>
            dispatch(checkAuth()),
        init: () =>
            dispatch(init()),
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
