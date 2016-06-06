import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { selectTopic, loadTopic } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.main.topics,
        selectedTopicName: ownProps.selectedTopicName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: (topic) =>
            dispatch(selectTopic(topic)),
        loadTopic: (selectedTopicName) =>
            dispatch(loadTopic({ selectedTopicName })),
    };
};

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);


export default NavigationContainer;
