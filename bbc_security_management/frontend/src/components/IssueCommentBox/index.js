import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as etasActions } from "redux/modules/etas";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitComment: message => {
      dispatch(etasActions.commentIssue(ownProps.issueId, message));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);