import moment, { Moment } from 'moment';
import { FC } from 'react';
import style from 'components/calendar/weekDays/weekDay/WeekDay.module.scss';
import { useWeekDay } from './weekDay/WeekDay.hooks';
import Term from 'components/Term';

type Props = {
  date: string;
  dayNumber: number;
  occupiedItems: Moment[];
};

const WeekDay: FC<Props> = ({ date, dayNumber, occupiedItems }) => {
  const { terms } = useWeekDay(date, dayNumber, occupiedItems);

  return (
    <div className={style.item}>
      <div className={style.info}>
        <span>{moment(date).format('DD.MM')}</span>
        <span>{moment(date).format('YYYY')}</span>
      </div>
      <div className={style.terms}>
        {terms.map((term, index) => {
          return (
            <Term
              key={`${term.start}-${term.end}-${index}`}
              term={term}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekDay;
