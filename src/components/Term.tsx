import { FC } from 'react';
import classes from 'react-style-classes';
import style from 'components/term/Term.module.scss';

type Props = {
  isOccupied: boolean;
  title: string;
};

const Term: FC<Props> = ({ title, isOccupied }) => {
  return (
    <div className={classes(style.term, isOccupied && style.occupiedTerm)}>
      {title}
    </div>
  );
};

export default Term;
