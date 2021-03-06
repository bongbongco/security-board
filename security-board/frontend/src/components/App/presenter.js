import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Dashboard from 'components/Dashboard';
import Auth from 'components/Auth';
import Feex from 'components/Feex';
import Fenx from 'components/Fenx';
import Alv3 from 'components/Alv3';

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
        <Route path="/fenx" component={Fenx} />
        <Route path="/feex" component={Feex} />
        <Route path="/alv3" component={Alv3} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

export default App;