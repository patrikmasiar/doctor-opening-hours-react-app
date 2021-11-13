import { FC } from 'react';
import 'styles/style.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { AppContextProvider } from 'store';
import Breadcrumbs from 'components/Breadcrumbs';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const { Header, Content, Footer } = Layout;

const App: FC = () => {
  return (
    <BrowserRouter basename="/">
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
        <Footer>
          Made with ❤️ by{' '}
          <a href="https://patrikmasiar.com" target="_blank" rel="noreferrer">
            Patrik Mäsiar
          </a>
          ,{' '}
          <a
            href="https://github.com/patrikmasiar"
            target="_blank"
            rel="noreferrer"
          >
            Github:
          </a>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
