import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './css/variables.css';
import './css/main.css';
import Header from './components/header';
import Yo from './routes/yo';
import Feed from './routes/feed';
import Account from './routes/account';
import Settings from './routes/settings';
import NewProject from './routes/newProject';
import Login from './routes/login';
import Registration from './routes/registration';

class App extends Component {
    renderRoutes() {
        return (
            <>
                <Route exact path={'/'} component={Yo} />
                <Route exact path={'/feed'} component={Feed} />
                <Route path={'/account'} component={Account} />
                <Route path={'/settings'} component={Settings} />
                <Route path={'/newProject'} component={NewProject} />
                <Route path={'/login'} component={Login} />
                <Route path={'/registration'} component={Registration} />
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