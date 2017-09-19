import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { IndexRoute } from 'react-router';

import rootReducer from './reducers/rootReducer';

// Custom module for storing/retrieving the state to/from browser's local storage
import { loadState } from './utils/localStorage';

export const store = createStore(rootReducer, loadState() );

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);



// Custom container components for which routes needs to be defined.
import AppContainer from './containers/appConstainer';
import AppLayoutContainer from './containers/appLayoutContainer'; //after login layout

//pages
import DashboardContainer from './containers/dashboardContainer';
import MartsContainer from './containers/martsContainer';




// Route definitions
ReactDOM.render(
  <Provider store={ store }>

    { /* Tell the Router to use our enhanced history */ }
    <Router history={ history }>
      <Route path="/" component={ AppContainer }>
        <IndexRoute component={ DashboardContainer } />
        <IndexRedirect to="/component" />

        <Route component={ AppLayoutContainer } >

          <Route
            path="component" title="Dashboard"
            component={ DashboardContainer }
          />

          <Route
            path="marts" title="Marts"
            component={ MartsContainer }
          />
        </Route>



      </Route>
    </Router>

  </Provider>,
  document.getElementById('root-container')
);
