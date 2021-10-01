type DayTerm = {
  start: string;
  end: string;
  isOccupied: boolean;
  isPause: boolean;
}

export const useWeekDay = (day: number) => {
  const isEven = () => {
    return day % 2 === 0;
  }

  const getAllDayTerms = () => {
    const times: any[] = [];
    const start = isEven() ? 8 : 13;
    const end =  isEven() ? 14 : 19;

    for (var hour = start; hour <= end; hour++) {
      times.push([hour, 0]);
      times.push([hour, 30]);
    }

    const range = times.map(item => {
      const [hour, minute] = item;

      return `${hour}:${minute === 0 ? '00' : minute}`;
    }).filter((_, index, arr) => {
      return index !== arr.length - 1;
    });

    const output: DayTerm[] = [];

    range.forEach((_, index) => {
      output.push({
        start: range[index].padStart(2, '0'),
        end: range[index + 1],
        isOccupied: false,
        isPause: false,
      });
    })

    return output.filter(item => !!item.start && !!item.end);
  };

  return {
    terms: getAllDayTerms(),
  }
};
