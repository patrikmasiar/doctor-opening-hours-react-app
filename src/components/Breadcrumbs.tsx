import  { FC } from 'react';
import { useLocation } from 'react-router';
import { Breadcrumb } from 'antd';
import style from 'components/breadcrumbs/Breadcrumbs.module.scss';

const Breadcrumbs: FC = () => {
  const { pathname } = useLocation();

  return (
    <Breadcrumb className={style.breadcrumbs}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {pathname.includes('reservation') && (
        <Breadcrumb.Item>Reservation</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default Breadcrumbs;