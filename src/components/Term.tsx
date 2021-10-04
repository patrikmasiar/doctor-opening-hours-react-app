import { FC } from 'react';
import classes from 'react-style-classes';
import style from 'components/term/Term.module.scss';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getQueryParameters } from 'utils/url';

type Props = {
  term: any;
  date: string;
};

const Term: FC<Props> = ({ term, date }) => {
  const isInPast = moment(date).diff(moment(), 'day') < 0;
  const isToday = date === moment().format('YYYY-MM-DD');
  const isDisabled =
    term.isOccupied || term.isLunchBreak || isInPast || isToday;

  const {week} = getQueryParameters(['week']);

  return (
    <Link
      to={
        !term.isOccupied && !term.isLunchBreak
          ? {
              pathname: 'reservation',
              search: `?week=${week}&date=${date}&start=${term.start}&end=${term.end}`,
            }
          : ''
      }
      className={classes(style.termLink, isDisabled && style.linkDisabled)}
    >
      <div
        className={classes(
          style.term,
          term.isOccupied && style.occupiedTerm,
          (term.isLunchBreak || isInPast || isToday) && style.lunchBreakTerm,
        )}
      >
        <span className={style.title}>
          {`${term.start} - ${term.end}`}
          {term.isLunchBreak && ' LUNCH BREAK'}
        </span>
      </div>
    </Link>
  );
};

export default Term;
