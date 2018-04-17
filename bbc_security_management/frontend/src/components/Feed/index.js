import { connect } from "react-redux";
import { actionCreators as etasActions } from "redux/modules/etas";
import Container from "./container";


const mapStateToProps = (state, ownProps) => {
  const { etas: { feed } } = state;
  return {
    feed  
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(etasActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);