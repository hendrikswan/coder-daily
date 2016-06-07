import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card/Card';

const Link = ({ link }) => {
    return (
        <Card
            key={link.id}
            style={{
                marginBottom: 10,
                padding: 10,
            }}
        >
            <div
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >

                    <div
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                        }}
                    >
                    {link.voteCount}
                    </div>

                </div>
                <ListItem
                    primaryText={link.url}
                    secondaryText={link.description}
                />
            </div>
        </Card>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        voteCount: React.PropTypes.number.isRequired,
    }).isRequired,
};

export default Link;
