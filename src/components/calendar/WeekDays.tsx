import { FC } from 'react';
import WeekDay from 'components/calendar/weekDays/WeekDay';
import { Reservation } from 'store';

type Props = {
  dates: string[];
  reservations: Reservation[];
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
