import { connect } from 'react-redux';
import LinkList from '../components/LinkList';
import { voteLink, startAdd } from '../actions';

const mapStateToProps = (state) => {
    return {
        links: state.main.links,
        selectedTopic: state.main.selectedTopic,
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
        onAdd: () => {
            dispatch(startAdd());
        },
    };
};


// need render then, and then proxy all props.. bad idea
// class RoutingAwareListListContainer extends React.Component {
//
// }


const LinkListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);

export default LinkListContainer;
