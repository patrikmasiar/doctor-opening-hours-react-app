import { FC } from 'react';
import WeekDay from './weekDays/WeekDay';

type Props = {
  dates: string[];
}

const WeekDays: FC<Props> = ({ dates }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <WeekDay
            key={date}
            dayNumber={index + 1}
            date={date}
          />
        )
      })}
    </div>
  )
};

export default WeekDays;
