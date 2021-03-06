import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./styles.scss";

const Navigation = (props) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
          <NavLink exact to="/" className={styles.dashboard} activeClassName={styles.dashboard}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-pie" fontSize="28px" color="#222831" />
                <span className={styles.name}>Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="/alv3" className={styles.alv3} activeClassName={styles.alv3}> 
            <div className={styles.menuTab}>
                <Ionicon icon="ios-bug" fontSize="28px" color="#222831" />
                <span className={styles.name}>Malware</span>
            </div>
          </NavLink>
          <NavLink to="/fenx" className={styles.fenx} activeClassName={styles.fenx}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-pulse" fontSize="28px" color="#222831" />
                <span className={styles.name}>Botnet</span>
            </div>
          </NavLink>
          <NavLink to="/feex" className={styles.feex} activeClassName={styles.feex}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-mail-open" fontSize="28px" color="#222831" />
                <span className={styles.name}>Email</span>
            </div>
          </NavLink>
        </div>
    </div>
  </div>
);

          /*
          <NavLink to="/admin" className={styles.nav} activeClassName={styles.navActive}>
            <div className={styles.menuTab}>
                <Ionicon icon="ios-construct" fontSize="28px" color="#222831" />
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