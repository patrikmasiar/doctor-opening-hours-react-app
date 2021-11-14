import { Spin } from 'antd';
import { FC } from 'react';
import { useCalendar } from 'components/calendar/Calendar.hooks';
import CalendarHeader from 'components/calendar/CalendarHeader';
import WeekDays from 'components/calendar/WeekDays';
import style from 'components/calendar/Calendar.module.scss';
import { useAppContext } from 'store';

const Calendar: FC = () => {
  const {
    state: { isLoadingTerms, reservations },
  } = useAppContext();
  const { canGoPrev, weekDates, goToNextWeek, goToPreviousWeek } =
    useCalendar();

  return (
    <div className={style.wrapper}>
      <CalendarHeader
        onNextClick={goToNextWeek}
        onPrevClick={goToPreviousWeek}
        canGoPrev={canGoPrev}
      />
      <WeekDays
        dates={weekDates}
        reservations={reservations}
      />
      {isLoadingTerms && (
        <div className={style.loader}>
          <Spin />
        </div>
      )}
    </div>
  );
};

export default Calendar;
