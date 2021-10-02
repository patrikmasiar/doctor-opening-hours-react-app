import { FC } from 'react';
import classes from 'react-style-classes';
import style from 'components/term/Term.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  term: any; // TODO: type
  date: string;
};

const Term: FC<Props> = ({ term, date }) => {
  return (
    <Link
      to={
        !term.isOccupied && !term.isLunchBreak
          ? {
              pathname: 'reservation',
              search: `?date=${date}&start=${term.start}&end=${term.end}`,
            }
          : ''
      }
      className={classes(
        style.termLink,
        (term.isOccupied || term.isLunchBreak) && style.linkDisabled,
      )}
    >
      <div
        className={classes(
          style.term,
          term.isOccupied && style.occupiedTerm,
          term.isLunchBreak && style.lunchBreakTerm,
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
