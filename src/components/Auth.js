import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';


class Auth extends React.Component {
    render() {
        const buttonStyle = {
            color: '#fff',
        };

        let authButton = (
            <FlatButton
                label="Log in"
                onMouseUp={this.props.showLock}
                style={buttonStyle}
            />
        );

        if (this.props.profile) {
            authButton = (
                <FlatButton
                    icon={(
                        <Avatar
                            src={this.props.profile.picture}
                            size={30}
                        />
                    )}
                    label="Log out"
                    primary={true}
                    onMouseUp={this.props.logOut}
                    style={buttonStyle}
                />
            );
        }

        return authButton;
    }
}

Auth.propTypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    showLock: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
};

export default Auth;
