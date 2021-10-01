import { Moment } from 'moment';
import { FC } from 'react';
import WeekDay from 'components/calendar/weekDays/WeekDay';

type Props = {
  dates: string[];
  occupiedItems: Moment[];
};

const WeekDays: FC<Props> = ({ dates, occupiedItems }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <WeekDay
            key={date}
            dayNumber={index + 1}
            date={date}
            occupiedItems={occupiedItems}
          />
        );
      })}
    </div>
  );
};

export default WeekDays;
