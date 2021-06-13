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
  if (isWeekend(date)) {
    return true;
  }

  if (isInRestrictionTimeRange(date)) {
    const lastLicenseDigit = parseInt(license.charAt(license.length - 1), 10);
    const day = getWeekDay(date);

    return !(
      (day === WEEK_DAYS.monday
      && (lastLicenseDigit === LICENSE_DIGITS.one || lastLicenseDigit === LICENSE_DIGITS.two))
      || (day === WEEK_DAYS.tuesday
        && (lastLicenseDigit === LICENSE_DIGITS.three || lastLicenseDigit === LICENSE_DIGITS.four))
      || (day === WEEK_DAYS.wednesday
        && (lastLicenseDigit === LICENSE_DIGITS.five || lastLicenseDigit === LICENSE_DIGITS.six))
      || (day === WEEK_DAYS.thursday
        && (lastLicenseDigit === LICENSE_DIGITS.seven || lastLicenseDigit === LICENSE_DIGITS.eight))
      || (day === WEEK_DAYS.friday
        && (lastLicenseDigit === LICENSE_DIGITS.nine || lastLicenseDigit === LICENSE_DIGITS.zero))
    );
  }

  return true;
};

export { canItBeOnRoad };
