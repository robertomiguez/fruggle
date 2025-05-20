import FLIGHTS from './FLIGHTS';

export default [
  {
    id: 1,
    title: 'weekend',
    flights: [...FLIGHTS],
  },
  {
    id: 2,
    title: 'week',
    flights: [...FLIGHTS, ...FLIGHTS],
  },
  {
    id: 3,
    title: '2 weeks',
    flights: [...FLIGHTS, ...FLIGHTS, ...FLIGHTS],
  },
  {
    id: 4,
    title: 'month',
    flights: [...FLIGHTS, ...FLIGHTS, ...FLIGHTS, ...FLIGHTS],
  },
];
