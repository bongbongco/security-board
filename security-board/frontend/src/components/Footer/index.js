import React from 'react';
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>About</li>
                        <li className={styles.listItem}>Support</li>
                        <li className={styles.listItem}>KISA</li>
                        <li className={styles.listItem}>ERS</li>
                        <li className={styles.listItem}>SYSASSET</li>
                        <li className={styles.listItem}>GITHUB</li>
                        <li className={styles.listItem}>WIKI</li>
                        <li className={styles.listItem}>JIRA</li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
);

export default Footer;