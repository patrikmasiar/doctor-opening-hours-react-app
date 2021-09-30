import { FC } from 'react';
import { useCalendar } from './calendar/Calendar.hooks';
import CalendarHeader from './calendar/CalendarHeader';
import WeekDays from './calendar/WeekDays';

const Calendar: FC = () => {
  const { week, weekDates, goToNextWeek, goToPreviousWeek } = useCalendar();

  return (
    <div>
      <CalendarHeader
        week={week}
        onNextClick={goToNextWeek}
        onPrevClick={goToPreviousWeek}
      />
      <WeekDays dates={weekDates} />
    </div>
  );
};

export default Calendar;
