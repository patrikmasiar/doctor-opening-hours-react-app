import { FC } from 'react';
import 'styles/style.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { AppContextProvider } from 'store';
import Breadcrumbs from 'components/Breadcrumbs';
import config from 'config';
import Footer from 'components/Footer';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <BrowserRouter basename={config.BASE_URL}>
      <Layout>
        <Header className="header">Doctor opening hours</Header>
        <Breadcrumbs />
        <Content className="content">
          <AppContextProvider>
            <Switch>
              <Route path="/" component={Main} exact />
              <Route path="/reservation" component={Reservation} exact />
            </Switch>
          </AppContextProvider>
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
