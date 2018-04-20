import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.scss";

const SignupForm = (props) => (
  <div className={formStyles.formComponent}>
    <h3 className={formStyles.signupHeader}>
      {"가입 후 이슈를 확인하세요."}
    </h3>
    <span className={formStyles.divider}>or</span>
    <form
      className={formStyles.form}
      onSubmit={props.handleSubmit}
      method="post"
    >
      <input
        type="email"
        placeholder={"전자우편"}
        className={formStyles.textInput}
        value={props.emailValue}
        onChange={props.handleInputChange}
        name="email"
      />
      <input
        type="text"
        placeholder={"이름"}
        className={formStyles.textInput}
        value={props.nameValue}
        onChange={props.handleInputChange}
        name="name"
      />
      <input
        type="username"
        placeholder={"아이디"}
        className={formStyles.textInput}
        value={props.usernameValue}
        onChange={props.handleInputChange}
        name="username"
      />
      <input
        type="password"
        placeholder={"비밀번호"}
        className={formStyles.textInput}
        value={props.passwordValue}
        onChange={props.handleInputChange}
        name="password"
      />
      <input
        type="submit"
        value={"가입"}
        className={formStyles.button}
        onChange={props.handleInputChange}
      />
    </form>
    <p className={formStyles.terms}>
      {"가입 신청 후 승인까지 다소 시간이 소요될 수 있습니다."}
    </p>
  </div>
);

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default SignupForm;