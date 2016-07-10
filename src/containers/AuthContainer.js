import { connect } from 'react-redux';
import Auth from '../components/Auth';
import { login } from '../actions';

const mapStateToProps = ({ main: { email } }) => {
    return {
        email,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (args) =>
            dispatch(login(args)),
    };
};

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);


export default AuthContainer;
