import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import App from './components/App';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('root')
  );


//registerServiceWorker();
render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));
