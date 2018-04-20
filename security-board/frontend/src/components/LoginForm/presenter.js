import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

const LoginForm = (props) => (
  <div className={formStyles.formComponent}>
    <form
      className={formStyles.form}
      onSubmit={props.handleSubmit}
      method="post"
    >
      <input
        type="text"
        placeholder={"아이디"}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="username"
        value={props.usernameValue}
      />
      <input
        type="password"
        placeholder={"비밀번호"}
        className={formStyles.textInput}
        onChange={props.handleInputChange}
        name="password"
        value={props.passwordValue}
      />
      <input
        type="submit"
        value={"로그인"}
        className={formStyles.button}
      />
    </form>
    <span className={formStyles.divider}>{"or"}</span>
    <span className={formStyles.forgotLink}>
      {"비밀번호를 잊으셨나요?"}
    </span>
  </div>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default LoginForm;