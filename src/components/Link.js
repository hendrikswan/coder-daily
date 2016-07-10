import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Card from 'material-ui/Card/Card';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { grey400 } from 'material-ui/styles/colors';

function VotingButton({ icon, handler, link }) {
    const Icon = icon;
    if (!link.votingEnabled) {
        return (<Icon
            style={{
                width: 50,
                height: 50,
            }}
            color={grey400}
        />);
    }

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                handler({ link });
            }}
        >
            <Icon
                style={{
                    width: 50,
                    height: 50,
                }}
            />
        </a>
    );
}

const Link = ({ link, onVoteUp, onVoteDown }) => {
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

                    <VotingButton
                        icon={UpArrow}
                        handler={onVoteUp}
                        link={link}
                    />

                    <div
                        style={{
                            fontSize: 17,
                            textAlign: 'center',
                        }}
                    >
                    {link.voteCount}
                    </div>

                    <VotingButton
                        icon={DownArrow}
                        handler={onVoteDown}
                        link={link}
                    />

                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <ListItem
                        primaryText={link.url}
                        secondaryText={link.description}
                    />
                </div>
            </div>
        </Card>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        voteCount: React.PropTypes.number.isRequired,
        votingEnabled: React.PropTypes.bool.isRequired,
    }).isRequired,
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};

export default Link;
