import { connect } from 'react-redux';
import Form from '../components/Form';
import { cancelAdd, add } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        cancelAdd: () =>
            dispatch(cancelAdd()),
        add: (link) =>
            dispatch(add(link)),
    };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);


export default FormContainer;
