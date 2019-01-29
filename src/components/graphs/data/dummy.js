export const testData = [
  {
    times: [
      { starting_time: 1355752800000, ending_time: 1355759900000 },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
    ],
  },
  { times: [{ starting_time: 1355759910000, ending_time: 1355761900000 }] },
  { times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }] },
]
export const rectAndCircleTestData = [
  {
    times: [
      { starting_time: 1355752800000, display: 'circle' },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
    ],
  },
  { times: [{ starting_time: 1355759910000, display: 'circle' }] },
  { times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }] },
]
export const labelTestData = [
  {
    label: 'Circle #1',
    times: [
      {
        starting_time: 1355752800000,
        ending_time: 1355759900000,
        color: 'green',
      },
      {
        starting_time: 1355756400000,
        ending_time: 1355759900000,
        color: 'orange',
      },
      {
        starting_time: 1355757600000,
        ending_time: 1355759900000,
        color: 'orange',
      },
      {
        starting_time: 1355767900000,
        ending_time: 1355774400000,
        color: 'red',
      },
    ],
  },
  {
    label: 'Circle #2',
    times: [
      {
        starting_time: 1355752800000,
        ending_time: 1355759900000,
        color: 'green',
      },
      {
        starting_time: 1355753800000,
        ending_time: 1355759900000,
        color: 'orange',
      },
      {
        starting_time: 1355756200000,
        ending_time: 1355759900000,
        color: 'orange',
      },
      {
        starting_time: 1355759910000,
        ending_time: 1355761900000,
        color: 'red',
      },
    ],
  },
  {
    label: 'Circle #3',
    times: [
      {
        starting_time: 1355761910000,
        ending_time: 1355763910000,
        color: 'green',
      },
      {
        starting_time: 1355763950000,
        ending_time: 1355763950000,
        color: 'orange',
      },
      {
        starting_time: 1355767900000,
        ending_time: 1355774400000,
        color: 'red',
      },
    ],
  },
]
export const iconTestData = [
  {
    class: 'jackie',
    icon: 'jackie.png',
    times: [
      { starting_time: 1355752800000, ending_time: 1355759900000 },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
    ],
  },
  {
    class: 'troll',
    icon: 'troll.png',
    times: [
      {
        starting_time: 1355759910000,
        ending_time: 1355761900000,
        display: 'circle',
      },
    ],
  },
  {
    class: 'wat',
    icon: 'wat.png',
    times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }],
  },
]
export const labelColorTestData = [
  {
    label: 'person a',
    times: [
      {
        color: 'green',
        label: 'Weeee',
        starting_time: 1355752800000,
        ending_time: 1355759900000,
      },
      {
        color: 'blue',
        label: 'Weeee',
        starting_time: 1355767900000,
        ending_time: 1355774400000,
      },
    ],
  },
  {
    label: 'person b',
    times: [
      {
        color: 'pink',
        label: 'Weeee',
        starting_time: 1355759910000,
        ending_time: 1355761900000,
      },
    ],
  },
  {
    label: 'person c',
    times: [
      {
        color: 'yellow',
        label: 'Weeee',
        starting_time: 1355761910000,
        ending_time: 1355763910000,
      },
    ],
  },
]
export const testDataWithColor = [
  {
    label: 'fruit 1',
    fruit: 'orange',
    times: [{ starting_time: 1355759910000, ending_time: 1355761900000 }],
  },
  {
    label: 'fruit 2',
    fruit: 'apple',
    times: [
      { starting_time: 1355752800000, ending_time: 1355759900000 },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
    ],
  },
  {
    label: 'fruit3',
    fruit: 'lemon',
    times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }],
  },
]
export const testDataWithColorPerTime = [
  {
    label: 'fruit 2',
    fruit: 'apple',
    times: [
      {
        fruit: 'orange',
        starting_time: 1355752800000,
        ending_time: 1355759900000,
      },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
      {
        fruit: 'lemon',
        starting_time: 1355774400000,
        ending_time: 1355775500000,
      },
    ],
  },
]
export const testDataRelative = [
  {
    times: [
      { starting_time: 1355752800000, ending_time: 1355759900000 },
      { starting_time: 1355767900000, ending_time: 1355774400000 },
    ],
  },
  { times: [{ starting_time: 1355759910000, ending_time: 1355761900000 }] },
  { times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }] },
]
