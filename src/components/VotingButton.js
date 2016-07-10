import React from 'react';
import { grey400 } from 'material-ui/styles/colors';

const VotingButton = ({ icon, handler, link }) => {
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
};

VotingButton.propTypes = {
    icon: React.PropTypes.element.isRequired,
    handler: React.PropTypes.func.isRequired,
};

export default VotingButton;
