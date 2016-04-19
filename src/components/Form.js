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
    onAdd = () => {
        this.props.onAdd({
            url: this._url.getValue(),
            description: this._description.getValue(),
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
                        /><br/>

                        <TextField
                            hintText="Description"
                            ref={(i) => this._description = i}
                            style={inputStyle}
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
