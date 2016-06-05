import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { selectTopic, showLock, logOut, loadTopic } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.main.topics,
        profile: state.main.profile,
        selectedTopicName: ownProps.selectedTopicName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: (topic) =>
            dispatch(selectTopic(topic)),
        showLock: () =>
            dispatch(showLock()),
        logOut: () =>
            dispatch(logOut()),
        loadTopic: (selectedTopicName) =>
            dispatch(loadTopic({ selectedTopicName })),
    };
};

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);


export default NavigationContainer;
