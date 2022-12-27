const howManyReindeers = require('./index');

describe('20 => Más viajes retadores', () => {
  const testCases = [
    {
      input: [
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ], [
          { country: 'Spain', weight: 30 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 },
        ],
      ],
      output: [
        {
          country: 'Spain',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
        {
          country: 'France',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 1 },
            { type: 'Diesel', num: 2 },
          ],
        },
        {
          country: 'Italy',
          reindeers: [
            { type: 'Electric', num: 3 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
      ],
    },
    {
      input: [
        [
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [
          { country: 'Spain', weight: 37 },
        ],
      ],
      output: [
        {
          country: 'Spain',
          reindeers: [
            { type: 'Electric', num: 2 },
            { type: 'Gasoline', num: 2 },
            { type: 'Diesel', num: 7 },
          ],
        },
      ],
    },
    {
      input: [
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 },
        ],
      ],
      output: [
        {
          country: 'Spain',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
        {
          country: 'Germany',
          reindeers: [
            { type: 'Gasoline', num: 1 },
            { type: 'Diesel', num: 2 },
          ],
        },
        {
          country: 'France',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 1 },
            { type: 'Diesel', num: 2 },
          ],
        },
        {
          country: 'Italy',
          reindeers: [
            { type: 'Electric', num: 3 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
      ],
    },
    {
      input: [
        [
          { type: 'Diesel', weightCapacity: 1 },
          { type: 'Gasoline', weightCapacity: 5 },
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
        ],
      ],
      output: [
        {
          country: 'Spain',
          reindeers: [
            { type: 'Gasoline', num: 5 },
            { type: 'Diesel', num: 5 },
          ],
        },
        {
          country: 'Germany',
          reindeers: [
            { type: 'Gasoline', num: 1 },
            { type: 'Diesel', num: 2 },
          ],
        },
      ],
    },
  ];

  it('should return an array type', () => {
    expect(howManyReindeers(...testCases[0].input)).toBeInstanceOf(Array);
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(howManyReindeers(...testCase.input)).toEqual(testCase.output);
  });
});
