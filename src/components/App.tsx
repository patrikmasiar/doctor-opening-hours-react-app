import { Layout } from 'antd';
import { FC } from 'react';
import Calendar from 'components/Calendar';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content style={{ padding: '50px' }}>
        <Calendar />
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default App;
