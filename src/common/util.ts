const NUMBERS_REGEX = /^[0-9]+$/;

const isEmptyString = (value: string): boolean => value.trim().length === 0;

const isValidLicense = (license: string): boolean => {
  const size = license.length;
  if (size < 6) {
    return false;
  }

  const lastFourCharactersPosition = size - 4;
  const licenseNumbers = license.slice(lastFourCharactersPosition, size);
  const licenseLetters = license.slice(0, lastFourCharactersPosition);
  return NUMBERS_REGEX.test(licenseNumbers) && !NUMBERS_REGEX.test(licenseLetters);
};

export { isEmptyString, isValidLicense };
