import React, { PropTypes } from 'react';
// import List from 'material-ui/lib/lists/list';
// import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const inputStyle = {
    width: '100%',
    marginTop: 10,
};

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            urlError: '',
            descriptionError: '',
        };
    }


    onAdd = () => {
        const url = this._url.getValue();
        const description = this._description.getValue();
        let urlError = '';
        let descriptionError = '';

        if (!url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
            urlError = "please specify a valid url";
        }

        if (!description) {
            descriptionError = "please specify a description for your link";
        }

        if (urlError || descriptionError) {
            this.setState({
                urlError,
                descriptionError,
            });

            return;
        }

        this.props.onAdd({
            url,
            description,
        });
    }

    render() {
        return (
            <Card
                style={{
                    marginTop: 15,
                    padding: 20,
                }}
            >
                <div
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: 320,
                    }}
                >
                    <div>
                        <TextField
                            hintText="URL"
                            ref={(i) => this._url = i}
                            style={inputStyle}
                            errorText={this.state.urlError}
                        /><br/>

                        <TextField
                            hintText="Description"
                            ref={(i) => this._description = i}
                            style={inputStyle}
                            errorText={this.state.descriptionError}
                        /><br/>

                        <RaisedButton
                            label="Add"
                            primary={true}
                            style={inputStyle}
                            onMouseUp={this.onAdd}
                        />

                        <RaisedButton
                            label="Cancel"
                            secondary={true}
                            style={inputStyle}
                            onMouseUp={this.props.onCancel}
                        />
                    </div>
                </div>

            </Card>
        );
    }
}

// Form.propTypes = {
//     links: PropTypes.arrayOf(
//         React.PropTypes.shape({
//             url: React.PropTypes.string.isRequired,
//             description: React.PropTypes.string.isRequired,
//             // id: React.PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     topic: PropTypes.shape({
//         name: React.PropTypes.string.isRequired,
//         description: React.PropTypes.string.isRequired,
//     }),
// };

export default Form;
