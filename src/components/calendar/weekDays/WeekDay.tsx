import moment from 'moment';
import { FC } from 'react';

type Props = {
  date: string;
};

const WeekDay: FC<Props> = ({ date }) => {
  return (
    <div>
      <div>
        {moment(date).format('DD.MM.YYYY')}
      </div>
      <div>
        terms
      </div>
    </div>
  )
};

export default WeekDay;
