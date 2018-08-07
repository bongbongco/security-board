import React from 'react';
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <span className={styles.copyright}>
                    <a href="http://ebase.ebaykorea.com/my/pages/person.aspx?accountname=EBAYKOREA\sunghong" className={styles.link}>
                        © IS team@Security, eBay Korea, 2018
                    </a>
                </span>
            </div>
        </div>
    </footer>
);

export default Footer;