import { FC } from 'react';
import WeekDay from 'components/calendar/weekDays/WeekDay';
import type { ReservationType } from 'store';

type Props = {
  dates: string[];
  reservations: ReservationType[];
};

const WeekDays: FC<Props> = ({ dates, reservations }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <WeekDay
            key={date}
            dayNumber={index + 1}
            date={date}
            reservations={reservations}
          />
        );
      })}
    </div>
  );
};

export default WeekDays;
