import { useState } from 'react';
import { getNumberOfTheWeek } from "utils/dates";

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

  return {
    week,
    goToNextWeek,
    goToPreviousWeek,
  };
};
