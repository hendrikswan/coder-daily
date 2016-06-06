import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';


const Auth = ({ profile, showLock, logOut }) => {
    const buttonStyle = {
        color: '#fff',
    };

    let authButton = (
        <FlatButton
            label="Log in"
            onMouseUp={showLock}
            style={buttonStyle}
        />
    );

    if (profile) {
        authButton = (
            <FlatButton
                icon={(
                    <Avatar
                        src={profile.picture}
                        size={30}
                    />
                )}
                label="Log out"
                primary={true}
                onMouseUp={logOut}
                style={buttonStyle}
            />
        );
    }

    return authButton;
};

Auth.propTypes = {
    profile: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    showLock: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
};

export default Auth;
