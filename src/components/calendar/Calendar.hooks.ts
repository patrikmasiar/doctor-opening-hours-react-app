import { useState, useMemo } from 'react';
import { getDaysInWeek, getNumberOfTheWeek } from "utils/dates";

export const useCalendar = () => {
  const [week, setWeek] = useState(getNumberOfTheWeek());

  const goToNextWeek = () => {
    setWeek(prevWeek => {
      return prevWeek + 1;
    });
  };

  const goToPreviousWeek = () => {
    setWeek(prevWeek => {
      return prevWeek - 1;
    })
  };

  const weekDates = useMemo(() => {
    return getDaysInWeek(week);
  }, [week])

  return {
    weekDates,
    goToNextWeek,
    goToPreviousWeek,
  };
};
