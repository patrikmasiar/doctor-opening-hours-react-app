import { Spin } from 'antd';
import { FC } from 'react';
import { useCalendar } from 'components/calendar/Calendar.hooks';
import CalendarHeader from 'components/calendar/CalendarHeader';
import WeekDays from 'components/calendar/WeekDays';
import { useTerms } from 'components/term/Term.hooks';
import style from 'components/calendar/Calendar.module.scss';

const Calendar: FC = () => {
  const { isLoading, occupiedItems } = useTerms();
  const { canGoPrev, weekDates, goToNextWeek, goToPreviousWeek } =
    useCalendar();

  return (
    <div className={style.wrapper}>
      <CalendarHeader
        onNextClick={goToNextWeek}
        onPrevClick={goToPreviousWeek}
        canGoPrev={canGoPrev}
      />
      <WeekDays dates={weekDates} occupiedItems={occupiedItems} />
      {isLoading && (
        <div className={style.loader}>
          <Spin />
        </div>
      )}
    </div>
  );
};

export default Calendar;
