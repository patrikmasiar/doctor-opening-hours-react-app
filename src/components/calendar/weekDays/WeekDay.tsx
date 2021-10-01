import moment from 'moment';
import { FC } from 'react';
import style from 'components/calendar/weekDays/weekDay/WeekDay.module.scss';
import { useWeekDay } from './weekDay/WeekDay.hooks';
import Term from 'components/Term';

type Props = {
  date: string;
  dayNumber: number;
};

const WeekDay: FC<Props> = ({ date, dayNumber }) => {
  const {terms} = useWeekDay(dayNumber);

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
        {terms.map(term => {
          return (
            <Term
              title={`${term.start} - ${term.end}`}
              isOccupied={term.isOccupied}
            />
          )
        })}
      </div>
    </div>
  )
};

export default WeekDay;
