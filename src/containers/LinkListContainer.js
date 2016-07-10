import { connect } from 'react-redux';
import LinkList from '../components/LinkList';
import { startAdd } from '../actions';

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
    };
};

const LinkListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);


export default LinkListContainer;
