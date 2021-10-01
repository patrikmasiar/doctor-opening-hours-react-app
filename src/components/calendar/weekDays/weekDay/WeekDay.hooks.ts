import moment from 'moment';
import { useEffect, useState } from 'react';

export const useWeekDay = (day: number) => {
  const isEven = () => {
    return day % 2 === 0;
  }

  const getTerms = () => {
    const terms = [];
    const startTime = isEven() ? 8 : 13;
    const endTime =  isEven() ? 14 : 19;
    let index = 0;

    for (let i = startTime; i <= endTime; i++) {
      const lastItem: {start: any, end: any} = terms[terms.length - 1] ?? {start: null, end: null,};

      terms.push({
        start: terms.length === 0 ? `${i}-00` : lastItem.end,
        end: index % 2 === 0 ? `${i}-30` : `${i}-00`,
      });

      index++;
    }

    return terms;
  };

  return {
    terms: getTerms(),
  }
};
