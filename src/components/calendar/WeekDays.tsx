import { FC } from 'react';
import WeekDay from './weekDays/WeekDay';

type Props = {
  dates: string[];
}

const WeekDays: FC<Props> = ({ dates }) => {
  return (
    <div>
      {dates.map(date => {
        return (
          <WeekDay
            key={date}
            date={date}
          />
        )
      })}
    </div>
  )
};

export default WeekDays;
