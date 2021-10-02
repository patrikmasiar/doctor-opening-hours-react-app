import { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Breadcrumb, Layout } from 'antd';

import Main from 'pages/Main';
import Reservation from 'pages/Reservation';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Header style={{ color: '#fff' }}>Doctor opening hours</Header>
        <Breadcrumb style={{ padding: 20 }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ padding: 50 }}>
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/reservation" component={Reservation} />
          </Switch>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
