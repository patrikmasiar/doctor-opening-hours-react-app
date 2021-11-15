import { FC } from 'react';
import { Layout } from 'antd';

const Footer: FC = () => {
  return (
    <Layout.Footer>
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
        Github: @patrikmasiar
      </a>
    </Layout.Footer>
  );
};

export default Footer;
