import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/userContext';
import { InitContentProvider } from './contexts/initContentContext';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <InitContentProvider>
                <App />
            </InitContentProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
);