import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/userContext';
import { OtherProvider } from './contexts/otherContext';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <OtherProvider>
                <App />
            </OtherProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
);