import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { AppContextProvider } from 'store';
import Breadcrumbs from 'components/Breadcrumbs';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Header style={{ color: '#fff' }}>Doctor opening hours</Header>
        <Breadcrumbs />
        <Content style={{ padding: 50 }}>
          <AppContextProvider>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/reservation" component={Reservation} exact />
            </Switch>
          </AppContextProvider>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
