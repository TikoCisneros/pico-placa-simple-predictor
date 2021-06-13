import moment, { Moment } from 'moment';
import { WEEK_DAYS, LICENSE_DIGITS } from './constants';

const getConvertedDate = (dateTime: Date): Moment => moment(dateTime);

const getWeekDay = (date: Date): number => getConvertedDate(date).weekday();

const isWeekend = (date: Date): boolean => {
  const day = getWeekDay(date);
  return (day === WEEK_DAYS.saturday || day === WEEK_DAYS.sunday);
};

const alterTimeInDate = (date: Date, hour: number, minute: number): Moment => getConvertedDate(date)
  .hour(hour)
  .minute(minute)
  .second(0)
  .millisecond(0);

const isInRestrictionTimeRange = (date: Date): boolean => {
  const selectedDate = getConvertedDate(date);
  const startMorning = alterTimeInDate(date, 7, 0);
  const endMorning = alterTimeInDate(date, 9, 30);
  const startAfternoon = alterTimeInDate(date, 16, 0);
  const endAfternoon = alterTimeInDate(date, 19, 30);

  return (
    (selectedDate.isAfter(startMorning) && selectedDate.isBefore(endMorning))
    || selectedDate.isSame(startMorning) || selectedDate.isSame(endMorning)
    || (selectedDate.isAfter(startAfternoon) && selectedDate.isBefore(endAfternoon))
    || selectedDate.isSame(startAfternoon) || selectedDate.isSame(endAfternoon)
  );
};

const canItBeOnRoad = (license: string, date: Date): boolean => {
  if (!isWeekend(date) && isInRestrictionTimeRange(date)) {
    const lastLicenseDigit = parseInt(license.charAt(license.length - 1), 10);
    const day = getWeekDay(date);

    return !(
      (day === WEEK_DAYS.monday && [LICENSE_DIGITS.one, LICENSE_DIGITS.two].includes(lastLicenseDigit))
      || (day === WEEK_DAYS.tuesday && [LICENSE_DIGITS.three, LICENSE_DIGITS.four].includes(lastLicenseDigit))
      || (day === WEEK_DAYS.wednesday && [LICENSE_DIGITS.five, LICENSE_DIGITS.six].includes(lastLicenseDigit))
      || (day === WEEK_DAYS.thursday && [LICENSE_DIGITS.seven, LICENSE_DIGITS.eight].includes(lastLicenseDigit))
      || (day === WEEK_DAYS.friday && [LICENSE_DIGITS.nine, LICENSE_DIGITS.zero].includes(lastLicenseDigit))
    );
  }

  return true;
};

export { canItBeOnRoad };
