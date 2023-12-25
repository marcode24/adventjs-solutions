const organizeChristmasDinner = require('./index');

describe('23 => La comida de navidad', () => {
  const testCases = [
    {
      input: [
        ['christmas turkey', 'turkey', 'sauce', 'herbs'],
        ['cake', 'flour', 'sugar', 'egg'],
        ['hot chocolate', 'chocolate', 'milk', 'sugar'],
        ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
      ],
      output: [
        ['sauce', 'christmas turkey', 'pizza'],
        ['sugar', 'cake', 'hot chocolate'],
      ],
    },
    {
      input: [
        ['fruit salad', 'apple', 'banana', 'orange'],
        ['berry smoothie', 'blueberry', 'banana', 'milk'],
        ['apple pie', 'apple', 'sugar', 'flour'],
      ],
      output: [
        ['apple', 'apple pie', 'fruit salad'],
        ['banana', 'berry smoothie', 'fruit salad'],
      ],
    },
    {
      input: [
        ['gingerbread', 'flour', 'ginger', 'sugar'],
        ['glazed ham', 'ham', 'honey', 'sugar', 'vinegar'],
        ['roast chicken', 'chicken', 'rosemary', 'thyme', 'garlic'],
        ['vegetable soup', 'carrot', 'potato', 'onion', 'garlic'],
        ['fruit punch', 'apple juice', 'orange juice', 'sugar'],
      ],
      output: [
        ['garlic', 'roast chicken', 'vegetable soup'],
        ['sugar', 'fruit punch', 'gingerbread', 'glazed ham'],
      ],
    },
    {
      input: [
        ['pumpkin pie', 'pumpkin', 'cinnamon', 'sugar', 'flour'],
        ['mashed potatoes', 'potatoes', 'butter', 'milk'],
        ['cinnamon rolls', 'flour', 'cinnamon', 'butter', 'sugar'],
        ['turkey stuffing', 'bread crumbs', 'celery', 'onion', 'butter'],
      ],
      output: [
        ['butter', 'cinnamon rolls', 'mashed potatoes', 'turkey stuffing'],
        ['cinnamon', 'cinnamon rolls', 'pumpkin pie'],
        ['flour', 'cinnamon rolls', 'pumpkin pie'],
        ['sugar', 'cinnamon rolls', 'pumpkin pie'],
      ],
    },
    {
      input: [
        ['chicken alfredo', 'chicken', 'pasta', 'parmesan'],
        ['parmesan chicken', 'chicken', 'parmesan', 'bread crumbs'],
        ['pasta salad', 'pasta', 'olive oil', 'tomato'],
        ['tomato soup', 'tomato', 'basil', 'cream'],
      ],
      output: [
        ['chicken', 'chicken alfredo', 'parmesan chicken'],
        ['parmesan', 'chicken alfredo', 'parmesan chicken'],
        ['pasta', 'chicken alfredo', 'pasta salad'],
        ['tomato', 'pasta salad', 'tomato soup'],
      ],
    },
    {
      input: [
        ['snowflake cookies', 'flour', 'sugar', 'vanilla'],
        ['winter stew', 'beef', 'carrots', 'potatoes'],
        ['holiday punch', 'cranberry juice', 'orange juice', 'sparkling water'],
        ['festive salad', 'lettuce', 'cranberries', 'walnuts'],
      ],
      output: [],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(organizeChristmasDinner(testCases[0].input))).toBe(true);
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(organizeChristmasDinner(input)).toEqual(output);
  });
});
