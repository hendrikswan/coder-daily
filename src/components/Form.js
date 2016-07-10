import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Form extends React.Component {
    state = {
        open: false,
    };

    add = () => {
        this.props.add({
            url: this.url.input.value,
            description: this.description.input.value,
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.cancelAdd}
            />,
            <FlatButton
                label="Add"
                primary={true}
                onTouchTap={this.add}
            />,
        ];

        return (
            <Dialog
                title="Add a new link"
                actions={actions}
                modal={true}
                open={this.props.adding}
                contentStyle={{ width: 320 }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <TextField
                        hintText="The url of the link"
                        ref={(f) => { this.url = f; }}
                    />

                    <TextField
                        hintText="The description of the link"
                        ref={(f) => { this.description = f; }}
                    />
                </div>
            </Dialog>
        );
    }

}

Form.propTypes = {
    add: React.PropTypes.func.isRequired,
    cancelAdd: React.PropTypes.func.isRequired,
    adding: React.PropTypes.bool.isRequired,
};

export default Form;
