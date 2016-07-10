import { connect } from 'react-redux';
import Form from '../components/Form';
import { add, cancelAdd } from '../actions';

const mapStateToProps = ({ main: { adding } }) => {
    return {
        adding,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (args) =>
            dispatch(add(args)),
        cancelAdd: (args) =>
            dispatch(cancelAdd(args)),
    };
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);


export default FormContainer;
