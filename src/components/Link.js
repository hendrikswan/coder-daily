import React, { PropTypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import UpArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down';

class Link extends React.Component {
    render() {
        const link = this.props.link;

        return (
            <Card
                key={link.id}
                style={{
                    marginBottom: 10,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        marginTop: 15,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <a
                            href="#"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    this.onVoteUp({ link });
                                }
                        }>
                            <UpArrow
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </a>

                        <div
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                            }}
                        >
                        {link.voteCount}
                        </div>

                        <a
                            href="#"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    this.onVoteDown({ link });
                                }
                        }>
                            <DownArrow
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                            />
                        </a>
                    </div>
                    <ListItem
                        primaryText={link.url}
                        secondaryText={link.description}
                    />
                </div>
            </Card>
        );
    }
}

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    }),
};


export default Link;
