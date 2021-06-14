import { isEmptyString, isValidLicense } from './util';

describe('Util tests', () => {
  it('should string length', () => {
    expect(isEmptyString('data')).toBeFalsy();
    expect(isEmptyString('')).toBeTruthy();
  });
  it('should validate license plate structure', () => {
    expect(isValidLicense('4567AC')).toBeFalsy();
    expect(isValidLicense('4A676C')).toBeFalsy();
    expect(isValidLicense('AC')).toBeFalsy();
    expect(isValidLicense('AC4567')).toBeTruthy();
    expect(isValidLicense('ABC0123')).toBeTruthy();
  });
});