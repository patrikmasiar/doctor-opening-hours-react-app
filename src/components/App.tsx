import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';


const App: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
