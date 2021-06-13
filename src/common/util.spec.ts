/* eslint-disable array-callback-return */
import { canItBeOnRoad } from './util';

describe('Util tests', () => {
  it('should validate no restrictions on weekend', () => {
    /**
     * Sat Jun 12 2021 10:01:00 GMT-0500
     * Sun Jun 13 2021 02:41:12 GMT-0500
    */
    const userDates = ['2021-06-12T15:01:00.000Z', '2021-06-13T07:41:12.630Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0123', new Date(userDate));
      expect(result).toBeTruthy();
    });
  });
  it('should validate no restrictions out hour range', () => {
    /**
     * Mon Jun 07 2021 06:00:00 GMT-0500
     * Tue Jun 15 2021 22:00:00 GMT-0500
     * Wed Jun 23 2021 12:00:00 GMT-0500
     */
    const userDates = [
      '2021-06-07T11:00:00.000Z',
      '2021-06-16T03:00:00.000Z',
      '2021-06-23T17:00:00.000Z',
    ];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0123', new Date(userDate));
      expect(result).toBeTruthy();
    });
  });
  it('should validate monday restrictions', () => {
    /**
     * Mon Jun 28 2021 08:30:00 GMT-0500
     * Mon Jun 14 2021 17:30:00 GMT-0500
     */
    const userDates = ['2021-06-28T13:30:00.000Z', '2021-06-14T22:30:00.000Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0121', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate tuesday restrictions', () => {
    /**
     * Tue Jun 29 2021 08:30:00 GMT-0500
     * Tue Jun 15 2021 17:30:00 GMT-0500
     */
    const userDates = ['2021-06-29T13:30:00.000Z', '2021-06-15T22:30:00.000Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0124', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate wednesday restrictions', () => {
    /**
     * Wed Jun 30 2021 08:30:00 GMT-0500
     * Wed Jun 16 2021 17:30:00 GMT-0500
     */
    const userDates = ['2021-06-30T13:30:00.000Z', '2021-06-16T22:30:00.000Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0125', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate thursday restrictions', () => {
    /**
     * Thu Jul 01 2021 08:30:00 GMT-0500
     * Thu Jun 17 2021 17:30:00 GMT-0500
     */
    const userDates = ['2021-07-01T13:30:00.000Z', '2021-06-17T22:30:00.000Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0128', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate friday restrictions', () => {
    /**
   * Fri Jul 02 2021 08:30:00 GMT-0500
   * Fri Jun 18 2021 17:30:00 GMT-0500
   */
    const userDates = ['2021-07-02T13:30:00.000Z', '2021-06-18T22:30:00.000Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0120', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
});
