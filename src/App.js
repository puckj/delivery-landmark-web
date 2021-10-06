import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';

import MainScreen from './screens/MainScreen/MainScreen';
import ReportScreen from './screens/ReportScreen/ReportScreen'

const App = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route
        path="/" exact
        component={() =>
          <MainScreen
            history={history}
          />}
      />
      <Route
        path="/report" exact
        component={() =>
          <ReportScreen
            history={history}
          />}
      />
    </Switch>
  );
}

export default App;
