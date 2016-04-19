import React, { PropTypes } from 'react';
// import List from 'material-ui/lib/lists/list';
// import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const widthStyle = {
    width: '100%',
};

class Form extends React.Component {
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
                            style={widthStyle}
                        /><br/>

                        <TextField
                            hintText="Description"
                            style={widthStyle}
                        /><br/>

                        <RaisedButton
                            label="Add"
                            primary={true}
                            style={widthStyle}
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
