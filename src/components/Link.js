import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import UpArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down';
import { grey400 } from 'material-ui/lib/styles/colors';

function getUpButon({ link, onVoteUp }) {
    const upLink = link.votingDisabled
        ? (
            <UpArrow
                style={{
                    width: 50,
                    height: 50,
                }}
                color={grey400}
            />
        )
        : (
            <a
                href="#"
                onClick={
                    (e) => {
                        e.preventDefault();
                        onVoteUp(link);
                    }
            }>
                <UpArrow
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </a>
        );

    return upLink;
}

function getDownButton({ link, onVoteDown }) {
    const downLink = link.votingDisabled
        ? (
            <DownArrow
                style={{
                    width: 50,
                    height: 50,
                }}
                color={grey400}
            />
        )
        : (
            <a
                href="#"
                onClick={
                    (e) => {
                        e.preventDefault();
                        onVoteDown(link);
                    }
            }>
                <DownArrow
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </a>
        );

    return downLink;
}


const Link = ({ link, onVoteUp, onVoteDown }) => {
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
                    {getUpButon({ link, onVoteUp })}

                    <div
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                        }}
                    >
                    {link.voteCount}
                    </div>

                    {getDownButton({ link, onVoteDown })}
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
        votingDisabled: React.PropTypes.boolean,
    }),
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};


export default Link;
