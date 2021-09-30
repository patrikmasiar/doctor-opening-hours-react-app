import moment from 'moment';
import { FC } from 'react';
import style from 'components/calendar/weekDays/weekDay/WeekDay.module.scss';

type Props = {
  date: string;
};

const WeekDay: FC<Props> = ({ date }) => {
  return (
    <div className={style.item}>
      <div className={style.info}>
        <span>
          {moment(date).format('DD.MM')}
        </span>
        <span>
          {moment(date).format('YYYY')}
        </span>
      </div>
      <div className={style.terms}>
        terms
      </div>
    </div>
  )
};

export default WeekDay;
