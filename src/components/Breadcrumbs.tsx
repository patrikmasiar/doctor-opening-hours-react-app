import  { FC } from 'react';
import { useLocation } from 'react-router';
import { Breadcrumb } from 'antd';

const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();

  return (
    <Breadcrumb style={{ padding: 20 }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {pathname.includes('reservation') && (
        <Breadcrumb.Item>Reservation</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;