import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Dashboard from 'components/Dashboard';
import Auth from 'components/Auth';
import Malware from 'components/Malware';
import Vulnerability from 'components/Vulnerability';


const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
        <Route exact key='1' path="/" component={Feed} />
        <Route key='2' path="/feed" component={Feed} />
        <Route key='3' path="/dashboard" component={Dashboard} />
        <Route key='4' path="/vulnerability" component={Vulnerability} />
        <Route key='5' path="/malware" component={Malware} />
        <Route key='6' path="/profile" render={() => 'Profile' } />
        <Route key='7' path="/search/:searchTerm" render={() => 'Search to :searchTerm' } />
    </Switch>
);


const PublicRoutes = props => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

export default App;