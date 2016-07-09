import { connect } from 'react-redux';
import LinkList from '../components/LinkList';

const mapStateToProps = (state) => {
    const {
        links,
        selectedTopic,
    } = state.main;

    return {
        links,
        selectedTopic,
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

const LinkListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);


export default LinkListContainer;
