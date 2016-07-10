import { connect } from 'react-redux';
import Auth from '../components/Auth';
import { login, cancelLogin, startLogin } from '../actions';

const mapStateToProps = ({ main: { email, authenticating } }) => {
    return {
        email,
        authenticating,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (args) =>
            dispatch(login(args)),
        startLogin: (args) =>
            dispatch(startLogin(args)),
        cancelLogin: (args) =>
            dispatch(cancelLogin(args)),
    };
};

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);


export default AuthContainer;
