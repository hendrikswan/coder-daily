import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class Auth extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Login"
                primary={true}
                disabled={true}
            />,
        ];


        return (
            <div>
                <FlatButton
                    label="Log in"
                    onMouseUp={this.handleOpen}
                    style={{
                        color: '#fff',
                    }}
                />

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    The login form comes here
                </Dialog>
            </div>
        );
    }

}

export default Auth;
