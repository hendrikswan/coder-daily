import { connect } from 'react-redux';
import Auth from '../components/Auth';
import { showLock, logOut } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        profile: state.main.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLock: () =>
            dispatch(showLock()),
        logOut: () =>
            dispatch(logOut()),
    };
};

const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);


export default AuthContainer;
