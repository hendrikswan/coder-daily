import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Auth extends React.Component {
    state = {
        open: false,
    };

    login = () => {
        this.props.login({ email: this.emailField.input.value });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.cancelLogin}
            />,
            <FlatButton
                label="Login"
                primary={true}
                onTouchTap={this.login}
            />,
        ];


        let v = (
            <div>
                <FlatButton
                    label="Log in"
                    onMouseUp={this.props.startLogin}
                    style={{
                        color: '#fff',
                    }}
                />

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.props.authenticating}
                >
                    <TextField
                        hintText="Specify your email"
                        ref={(f) => { this.emailField = f; }}
                    />
                </Dialog>
            </div>
        );

        if (this.props.email) {
            v = (
                <div
                    style={{
                        color: '#fff',
                        marginTop: 15,
                        marginRight: 15,
                    }}
                >
                    {this.props.email}
                </div>
            );
        }

        return v;
    }

}

Auth.propTypes = {
    login: React.PropTypes.func.isRequired,
    authenticating: React.PropTypes.bool.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
    startLogin: React.PropTypes.func.isRequired,
    email: React.PropTypes.string,
};

export default Auth;
