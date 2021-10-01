import { FC } from 'react';
import { useCalendar } from './calendar/Calendar.hooks';
import CalendarHeader from './calendar/CalendarHeader';
import WeekDays from './calendar/WeekDays';
import { useTerms } from './term/Term.hooks';

const Calendar: FC = () => {
  const {} = useTerms();
  const { canGoPrev, weekDates, goToNextWeek, goToPreviousWeek } =
    useCalendar();

  return (
    <div>
      <CalendarHeader
        onNextClick={goToNextWeek}
        onPrevClick={goToPreviousWeek}
        canGoPrev={canGoPrev}
      />
      <WeekDays dates={weekDates} />
    </div>
  );
};

export default Calendar;
