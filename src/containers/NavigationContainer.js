import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { selectTopic } from '../actions';

const mapStateToProps = (state) => {
    const {
        topics,
        selectedTopic,
    } = state.main;

    return {
        topics,
        selectedTopic,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: ({ topic }) =>
            dispatch(selectTopic({ topic })),
    };
};

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);


export default NavigationContainer;
