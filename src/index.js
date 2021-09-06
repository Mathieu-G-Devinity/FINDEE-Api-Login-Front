// == Import : npm
import React from 'react';
import { render, ReactDom } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';
import App from 'src/containers/App';

//root element creates Virtual DOM
const rootReactElement = (
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
);
// The target where the DOM has to be
const target = document.getElementById('root');
// Render function is initializing our virtual DOM
render(rootReactElement, target);
