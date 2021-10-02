import { FC } from 'react';
import classes from 'react-style-classes';
import style from 'components/term/Term.module.scss';
import { Link } from 'react-router-dom';

type Props = {
  isOccupied: boolean;
  title: string;
};

const Term: FC<Props> = ({ title, isOccupied }) => {
  return (
    <Link
      to={{
        pathname: 'reservation',
      }}
      className={style.termLink}
    >
      <div className={classes(style.term, isOccupied && style.occupiedTerm)}>
        <span className={style.title}>{title}</span>
      </div>
    </Link>
  );
};

export default Term;
