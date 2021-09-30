import { FC } from 'react';
import { useCalendar } from './calendar/Calendar.hooks';
import CalendarHeader from './calendar/CalendarHeader';
import WeekDays from './calendar/WeekDays';

const Calendar: FC = () => {
  const { weekDates, goToNextWeek, goToPreviousWeek } = useCalendar();

  return (
    <div>
      <CalendarHeader
        onNextClick={goToNextWeek}
        onPrevClick={goToPreviousWeek}
      />
      <WeekDays dates={weekDates} />
    </div>
  );
};

export default Calendar;
