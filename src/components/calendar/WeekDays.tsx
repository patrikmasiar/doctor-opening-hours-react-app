import { Moment } from 'moment';
import { FC } from 'react';
import WeekDay from 'components/calendar/weekDays/WeekDay';
import { Reservation } from 'store';

type Props = {
  dates: string[];
  occupiedItems: Moment[];
  reservations: Reservation[];
};

const WeekDays: FC<Props> = ({ dates, occupiedItems, reservations }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <WeekDay
            key={date}
            dayNumber={index + 1}
            date={date}
            occupiedItems={occupiedItems}
            reservations={reservations}
          />
        );
      })}
    </div>
  );
};

export default WeekDays;
