import RomanNumerals from './RomanNumerals';

const onlyNums = 'Please enter only numbers.';
const onlyRoman =
  'Please enter only valid integer or Roman numeral. Only the following Roman numerals are accepted I,V,X,L,C,D,M.';
const notSupported = 'Only numbers between 1-4999 are supported.';
const invalidFormat = 'Your Roman numeral contains invalid format.';

describe('RomanNumerals', () => {
  describe('toRoman()', () => {
    it('-- should convert integer to Roman numeral', () => {
      expect(RomanNumerals.toRoman(1)).toBe('I');
      expect(RomanNumerals.toRoman(1000)).toBe('M');
      expect(RomanNumerals.toRoman(2009)).toBe('MMIX');
      expect(RomanNumerals.toRoman(4999)).toBe('MMMMCMXCIX');
      expect(RomanNumerals.toRoman(2008)).toBe('MMVIII');
    });

    it('-- should reject string', () => {
      expect(RomanNumerals.toRoman('2009')).toBe(onlyNums);
    });

    it('-- should reject number with decimal', () => {
      expect(RomanNumerals.toRoman(2009.08)).toBe(onlyNums);
    });

    it('-- should reject number outside 1-4999', () => {
      expect(RomanNumerals.toRoman(-1)).toBe(notSupported);
      expect(RomanNumerals.toRoman(5000)).toBe(notSupported);
      expect(RomanNumerals.toRoman(10000)).toBe(notSupported);
      expect(RomanNumerals.toRoman(-200)).toBe(notSupported);
    });
  });

  describe('fromRoman()', () => {
    it('-- should convert Roman numeral to integer', () => {
      expect(RomanNumerals.fromRoman('I')).toBe(1);
      expect(RomanNumerals.fromRoman('M')).toBe(1000);
      expect(RomanNumerals.fromRoman('MMIX')).toBe(2009);
      expect(RomanNumerals.fromRoman('MMMMCMXCIX')).toBe(4999);
      expect(RomanNumerals.fromRoman('MMVIII')).toBe(2008);
    });

    it('-- should reject non-roman numerals', () => {
      expect(RomanNumerals.fromRoman('MMIHX')).toBe(onlyRoman);
      expect(RomanNumerals.fromRoman('MMNL')).toBe(onlyRoman);
      expect(RomanNumerals.fromRoman('CCUI')).toBe(onlyRoman);
    });

    it('-- should reject invalid Roman numeral format', () => {
      expect(RomanNumerals.fromRoman('IIII')).toBe(invalidFormat);
      expect(RomanNumerals.fromRoman('IIX')).toBe(invalidFormat);
      expect(RomanNumerals.fromRoman('IXD')).toBe(invalidFormat);
      expect(RomanNumerals.fromRoman('LM')).toBe(invalidFormat);
    });
  });

  describe('Reverse Validation', () => {
    it('-- should reverse validate all valid integer and roman numerals 1-4999', () => {
      // This small set can be tested without issues but
      // this type of test is not advisable for larger sets.
      for (let i = 1; i < 5000; i++) {
        expect(i).toBe(RomanNumerals.fromRoman(RomanNumerals.toRoman(i)));
      }
    });
  });
});
