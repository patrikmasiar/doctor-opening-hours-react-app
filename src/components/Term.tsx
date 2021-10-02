import { FC } from 'react';
import classes from 'react-style-classes';
import style from 'components/term/Term.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  term: any; // TODO: type
};

const Term: FC<Props> = ({ term }) => {
  return (
    <Link
      to={!term.isOccupied ? {
        pathname: 'reservation',
      } : ''}
      className={classes(style.termLink, term.isOccupied && style.linkDisabled)}
    >
      <div
        className={classes(style.term, term.isOccupied && style.occupiedTerm)}
      >
        <span className={style.title}>{`${term.start} - ${term.end}`}</span>
      </div>
    </Link>
  );
};

export default Term;
