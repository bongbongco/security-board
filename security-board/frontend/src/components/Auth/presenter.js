import React from 'react';
import styles from './styles.scss';
import LoginForm from 'components/LoginForm';
import SignupForm from 'components/SignupForm';


const Auth = (props) => (
    <main className={styles.auth}>
        <div className={styles.column}>
            <img src={require('images/meerkat.jpg')} alt='security manager' />
        </div>
        <div className={styles.column}>
            <div className={`${styles.whiteBox} ${styles.formBox}`}>
                <img src={require('images/logo.png')} alt='logo' />
                {props.action === 'login' && <LoginForm />}
                {props.action === 'signup' && <SignupForm />}
            </div>
            <div className={styles.whiteBox}>
                {props.action === 'signup' && (
                    <p className={styles.text}>
                        {"계정이 있으신가요?"}{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.changeAction}
                        >
                            {"로그인"}
                        </span>
                    </p>
                )}
                {props.action === 'login' && (
                    <p className={styles.text}>
                        {"아직 계정이 없으신가요?"}{" "}
                        <span
                            className={styles.changeLink}
                            onClick={props.changeAction}
                        >
                            {"가입"}
                        </span>
                    </p>
                )}
            </div>
            <div className={styles.contactBox}>
                <span>
                    ETAS 연락처
                </span>
                <div className={styles.contacts}>
                    <img
                        src={require('images/contact_1.png')}
                        alt='manager contact'
                    />
                    <img
                        src={require('images/contact_2.png')}
                        alt='manager contact'
                    />
                </div>
            </div>
        </div>
    </main>
);

export default Auth;