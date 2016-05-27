import { connect } from 'react-redux';
import LinkList from '../components/LinkList';
import { voteLink } from '../actions';

const mapStateToProps = (state) => {
    return {
        links: state.links,
        selectedTopic: state.selectedTopic,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onVoteUp: (link) => {
            dispatch(voteLink({ link, increment: 1 }));
        },
        onVoteDown: (link) => {
            dispatch(voteLink({ link, increment: -1 }));
        },
    };
};

const LinkListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);




export default LinkListContainer;
