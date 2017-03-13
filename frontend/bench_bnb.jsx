import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { login, signup, logout } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.store = configureStore();
});
