import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Dashboard from 'components/Dashboard';
import Auth from 'components/Auth';
import Sert from 'components/Sert';
import Etas from 'components/Etas';
import Dlp from 'components/Dlp';
import Admin from 'components/Admin';

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} pathname={props.pathname} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/etas" component={Etas} />
        <Route path="/sert" component={Sert} />
        <Route path="/dlp" component={Dlp} />
        <Route path="/admin" component={Admin} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

export default App;