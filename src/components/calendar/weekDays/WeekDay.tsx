import moment from 'moment';
import { FC } from 'react';
import style from 'components/calendar/weekDays/weekDay/WeekDay.module.scss';
import { useWeekDay } from './weekDay/WeekDay.hooks';
import Term from 'components/Term';
import { Alert } from 'antd';
import type { ReservationType } from 'store';

type Props = {
  date: string;
  dayNumber: number;
  reservations: ReservationType[];
};

const WeekDay: FC<Props> = ({
  date,
  dayNumber,
  reservations,
}) => {
  const { terms, isClosed } = useWeekDay(
    date,
    dayNumber,
    reservations,
  );

  return (
    <div className={style.item}>
      <div className={style.info}>
        <span>{moment(date).format('DD.MM')}</span>
        <span>{moment(date).format('YYYY')}</span>
      </div>
      <div className={style.terms}>
        {isClosed ? (
          <Alert
            message="The ambulance is closed today"
            type="warning"
          />
        ) : (
          <>
            {terms.map((term, index) => {
              return (
                <Term
                  key={`${term.start}-${term.end}-${index}`}
                  date={date}
                  term={term}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default WeekDay;
