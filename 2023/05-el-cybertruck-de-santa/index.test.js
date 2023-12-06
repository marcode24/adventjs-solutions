const cyberReindeer = require('./index');

describe('05 => El cybertruck de santa', () => {
  const testCases = [
    {
      input: ['S..|...|..', 10],
      output: [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..',
      ],
    },
    {
      input: ['S.|.', 4],
      output: [
        'S.|.',
        '.S|.',
        '.S|.',
        '.S|.',
      ],
    },
    {
      input: ['S.|.|.', 7],
      output: [
        'S.|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '..S.*.',
        '..*S*.',
      ],
    },
    {
      input: ['S.|..', 6],
      output: [
        'S.|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '..S..',
      ],
    },
    {
      input: ['S.|.|.|......|.||.........', 8],
      output: [
        'S.|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '..S.*.*......*.**.........',
        '..*S*.*......*.**.........',
        '..*.S.*......*.**.........',
      ],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(cyberReindeer('S|.....', 5))).toBe(true);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(cyberReindeer(...input)).toEqual(output);
  });
});
