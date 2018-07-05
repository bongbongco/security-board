import React from 'react';
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <div className={styles.column}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <a 
                                href="https://wiki.ebaykorea.com/display/IS/Information+Security+Team" 
                                className={styles.link}
                                >
                                About
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="http://ebase.ebaykorea.com/my/pages/person.aspx?accountname=EBAYKOREA\sunghong" 
                                className={styles.link}
                                >
                                Support
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="https://www.kisa.or.kr/main.jsp" 
                                className={styles.link}
                                >
                                KISA
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="http://ers.ebaykorea.com" 
                                className={styles.link}
                                >
                                ERS
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="http://sysasset.ebaykorea.com" 
                                className={styles.link}
                                >
                                SYSASSET
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="http://github.ebaykorea.com/" 
                                className={styles.link}
                                >
                                GITHUB
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="https://wiki.ebaykorea.com" 
                                className={styles.link}
                                >
                                WIKI
                            </a>
                        </li>
                        <li className={styles.listItem}>
                            <a 
                                href="https://jira.ebaykorea.com/" 
                                className={styles.link}
                                >
                                JIRA
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
);

export default Footer;