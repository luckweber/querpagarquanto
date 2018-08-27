import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { Provider } from 'react-redux';
import { Store } from './../store';
import Home from './Home';
import Loading from './Loading';
import Products from './products/Products';

import 'primereact/resources/themes/nova-light/theme.css';
//import 'primereact/resources/primereact.min.css';
//import 'primeicons/primeicons.css';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dynamic" component={AsyncDynamicPAge} />
            <Route exact path="/products" component={Products} />
            <Route component={AsyncNoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
