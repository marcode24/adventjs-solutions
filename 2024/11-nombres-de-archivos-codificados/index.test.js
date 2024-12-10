const decodeFilename = require('./index');

describe('11 => Nombres-de-archivos-codificados', () => {
  const TEST_CASES = [
    {
      input: '2023122512345678_sleighDesign.png.grinchwa',
      output: 'sleighDesign.png',
    },
    {
      input: '42_chimney_dimensions.pdf.hack2023',
      output: 'chimney_dimensions.pdf',
    },
    {
      input: '987654321_elf-roster.csv.tempfile',
      output: 'elf-roster.csv',
    },
    {
      input: '2024120912345678_magic_wand-blueprint.jpg.grinchbackup',
      output: 'magic_wand-blueprint.jpg',
    },
    {
      input: '51231_trainSchedule.txt.extra',
      output: 'trainSchedule.txt',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    expect(typeof decodeFilename(testCase.input)).toBe('string');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    expect(decodeFilename(input)).toBe(output);
  });
});
