/* eslint-disable array-callback-return */
import { canItBeOnRoad } from './util';

describe('Util tests', () => {
  it('should validate no restrictions on weekend', () => {
    /**
     * Sat Jun 12 2020 07:27:41 GMT-0500
     * Sun Jun 13 2020 16:17:41 GMT-0500
    */
    const userDates = ['2020-06-12T12:27:41.707Z', '2020-06-13T21:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0123', new Date(userDate));
      expect(result).toBeTruthy();
    });
  });
  it('should validate no restrictions out hour range', () => {
    /**
     * Mon Jun 14 2020 05:27:41 GMT-0500
     * Mon Jun 14 2020 15:00:59 GMT-0500
     * Fry Jun 11 2020 12:00:59 GMT-0500
     * Fry Jun 11 2020 21:00:59 GMT-0500
     */
    const userDates = [
      '2020-06-14T10:27:41.707Z',
      '2020-06-14T20:00:59.707Z',
      '2020-06-11T17:00:09.707Z',
      '2020-06-12T02:00:59.707Z',
    ];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0123', new Date(userDate));
      expect(result).toBeTruthy();
    });
  });
  it('should validate monday restrictions', () => {
    const userDates = ['2020-06-14T13:27:41.707Z', '2020-06-14T22:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0121', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate tuesday restrictions', () => {
    const userDates = ['2020-06-15T13:27:41.707Z', '2020-06-15T22:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0124', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate wednesday restrictions', () => {
    const userDates = ['2020-06-16T13:27:41.707Z', '2020-06-16T22:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0125', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate thursday restrictions', () => {
    const userDates = ['2020-06-17T13:27:41.707Z', '2020-06-17T22:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0128', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
  it('should validate friday restrictions', () => {
    const userDates = ['2020-06-18T13:27:41.707Z', '2020-06-18T22:17:41.707Z'];
    userDates.map((userDate) => {
      const result = canItBeOnRoad('AAA0120', new Date(userDate));
      expect(result).toBeFalsy();
    });
  });
});
