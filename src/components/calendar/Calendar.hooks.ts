import { useState, useMemo, useEffect } from 'react';
import { getDaysInWeek, getNumberOfTheWeek } from 'utils/dates';
import { getQueryParameters, setQueryParameter } from 'utils/url';

export const useCalendar = () => {
  const [week, setWeek] = useState(0);

  useEffect(() => {
    initNumberOfTheWeek();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initNumberOfTheWeek = () => {
    const queryParams = getQueryParameters(['week']);
    let weekNumber = getNumberOfTheWeek();

    if (!!queryParams.week) {
      weekNumber = Number.parseInt(queryParams.week);
    }

    setWeek(weekNumber);
    setWeekToURL(weekNumber);
  };

  const goToNextWeek = () => {
    setWeek((prevWeek) => {
      const newWeek = prevWeek + 1;

      setWeekToURL(newWeek);

      return prevWeek + 1;
    });
  };

  const goToPreviousWeek = () => {
    setWeek((prevWeek) => {
      if (!canGoPrev) {
        return prevWeek;
      }

      const newWeek = prevWeek - 1;

      setWeekToURL(newWeek);

      return newWeek;
    });
  };

  const setWeekToURL = (week: number) => {
    setQueryParameter('week', week);
  };

  const canGoPrev = useMemo(() => {
    return week > getNumberOfTheWeek();
  }, [week]);

  const weekDates = useMemo(() => {
    return getDaysInWeek(week);
  }, [week]);

  return {
    canGoPrev,
    weekDates,
    goToNextWeek,
    goToPreviousWeek,
  };
};
