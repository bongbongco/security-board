import React from 'react';
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <span className={styles.copyright}>© IS team@Security, eBay Korea, 2018</span>
            </div>
        </div>
    </footer>
);

export default Footer;