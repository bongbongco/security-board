import { connect } from "react-redux";
import Container from "./container";
import { push } from "react-router-redux";

const mapStateToProps = (state, ownProps) => {
  const { routing: { location } } = state;
  return {
    pathname: location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    goToSearch: searchTerm => {
      dispatch(push(`/search/${searchTerm}`));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);