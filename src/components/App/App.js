import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../css/variables.css';
import '../../css/main.css';
import Header from '../Header/Header';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Yo from '../../routes/yo';
import Buzz from '../../routes/BuzzRoute/BuzzRoute';
import Connections from '../../routes/ConnectionsRoute/ConnectionsRoute'
import Feed from '../../routes/FeedRoute/FeedRoute';
import Portfolio from '../../routes/PortfolioRoute/PortfolioRoute';
import Account from '../../routes/AccountRoute/AccountRoute';
import AvatarUploadRoute from '../../routes/AvatarUploadRoute/AvatarUploadRoute';
import NewProject from '../../routes/NewProjectRoute/NewProjectRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute';
import Footer from '../Footer/Footer';

class App extends Component {
    renderRoutes() {
        return (
            <Switch>
                <PublicOnlyRoute
                    exact
                    path={'/'}
                    component={Yo}
                />
                <PublicOnlyRoute
                    path={'/login'}
                    component={LoginRoute}
                />
                <PublicOnlyRoute
                    path={'/register'}
                    component={RegistrationRoute}
                />
                <PrivateRoute
                    path={'/account'}
                    component={Account}
                />
                <PrivateRoute
                    path={'/avatarupload'}
                    component={AvatarUploadRoute}
                />
                <PrivateRoute
                    path={'/buzz'}
                    component={Buzz}
                />
                <PrivateRoute
                    path={'/connections'}
                    component={Connections}
                />
                <PrivateRoute
                    exact path={'/feed'}
                    component={Feed}
                />
                <PrivateRoute
                    path={'/newProject'}
                    component={NewProject}
                />
                <PrivateRoute
                    path={'/portfolio'}
                    component={Portfolio}
                />
            </Switch>
        );
    };

    render() {
        return (
            <div className="App">
                <Header />
                <main
                    className='App-Main'
                >
                    {this.renderRoutes()}
                </main>
                <Footer />
            </div>
        );
    };
};

export default App;