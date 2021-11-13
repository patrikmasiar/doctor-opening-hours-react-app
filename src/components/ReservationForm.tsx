import { Alert, Button } from 'antd';
import moment from 'moment';
import { FC } from 'react';
import { useReservationForm } from 'components/reservationForm/ReservationForm.hooks';
import style from 'components/reservationForm/ReservationForm.module.scss';

const ReservationForm: FC = () => {
  const { date, start, end, submit } = useReservationForm();

  return (
    <div>
      <Alert
        message={`Your reservation will be for ${moment(date).format(
          'DD.MM.YYYY',
        )}, from ${start} to ${end}.`}
        type="info"
      />
      <Button onClick={submit} type="primary" className={style.button}>
        Confirm reservation
      </Button>
    </div>
  );
};

export default ReservationForm;
