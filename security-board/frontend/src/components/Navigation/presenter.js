import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.scss";

const Navigation = (props) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
          <NavLink exact to="/" className={styles.nav} activeClassName={styles.navActive}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-pie" fontSize="28px" color="#222831" />
                <span className={styles.name}>Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="/fenx" className={styles.nav} activeClassName={styles.navActive}> 
            <div className={styles.menuTab}>
                <Ionicon icon="ios-bug" fontSize="28px" color="#222831" />
                <span className={styles.name}>Etas</span>
            </div>
          </NavLink>
          <NavLink to="/sert" className={styles.nav} activeClassName={styles.navActive}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-nuclear" fontSize="28px" color="#222831" />
                <span className={styles.name}>SERT</span>
            </div>
          </NavLink>
          <NavLink to="/dlp" className={styles.nav} activeClassName={styles.navActive}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-lock" fontSize="28px" color="#222831" />
                <span className={styles.name}>DLP</span>
            </div>
          </NavLink>
        </div>
    </div>
  </div>
);
/*
          <NavLink to="/admin" className={styles.nav} activeClassName={styles.navActive}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-build" fontSize="28px" color="#222831" />
                <span className={styles.name}>ADMIN</span>
            </div>
          </NavLink>
*/
Navigation.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired
};

export default Navigation;