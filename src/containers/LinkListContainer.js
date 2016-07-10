import { connect } from 'react-redux';
import LinkList from '../components/LinkList';
import { startAdd, voteLink } from '../actions';

const mapStateToProps = (state) => {
    const {
        links,
        selectedTopic,
        email,
    } = state.main;

    return {
        links,
        selectedTopic,
        email,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startAdd: () => {
            dispatch(startAdd());
        },
        onVoteUp: ({ link }) => {
            dispatch(voteLink({ link, increment: 1 }));
        },
        onVoteDown: ({ link }) => {
            dispatch(voteLink({ link, increment: -1 }));
        },
    };
};

const LinkListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);


export default LinkListContainer;
