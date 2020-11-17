import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/variables.css';
import './css/main.css';
import Header from './components/header';
import Yo from './routes/yo';
import Buzz from './routes/BuzzRoute/BuzzRoute';
import Connections from './routes/ConnectionsRoute/ConnectionsRoute'
import Feed from './routes/FeedRoute/FeedRoute';
import Portfolio from './routes/PortfolioRoute/PortfolioRoute';
import Account from './routes/AccountRoute/AccountRoute';
import NewProject from './routes/NewProjectRoute/NewProjectRoute';
import Login from './routes/LoginRoute/LoginRoute';
import Registration from './routes/RegistrationRoute/RegistrationRoute';
import Footer from './components/Footer/Footer';

class App extends Component {
    renderRoutes() {
        return (
            <>
                <Route exact path={'/'} component={Yo} />
                <Route exact path={'/feed'} component={Feed} />
                <Route path={'/portfolio'} component={Portfolio} />
                <Route path={'/connections'} component={Connections} />
                <Route path={'/buzz'} component={Buzz} />
                <Route path={'/account'} component={Account} />
                <Route path={'/newProject'} component={NewProject} />
                <Route path={'/login'} component={Login} />
                <Route path={'/registration'} component={Registration} />
                <Footer />
            </>
        );
    };

    render() {
        return (
            <div className="App">
                <header>
                    <Header />
                </header>
                <main className='App-Main'>{this.renderRoutes()}</main>
            </div>
        );
    };
};

export default App;