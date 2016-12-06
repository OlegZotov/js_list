import List from '../list.js';

test('make list with two elements', () => {
  const l = new List();
  l.add(1).add(2);
  expect(l.toString()).toBe('2 1');
});

test('create list from elements list', () => {
  const l = new List(1, 2, 3, 4);
  expect(l.toString()).toBe('4 3 2 1');
});

test('count elements', () => {
  const l = new List();
  l.add(1).add(2).add(3);
  expect(l.count()).toBe(3);
});

test('add to tail', () => {
  const l = new List(1, 2, 3, 4).addTail(5);
  expect(l.toString()).toBe('4 3 2 1 5');
});

test('remove by value', () => {
  const l = new List(1, 2, 3, 4).remove(3);
  expect(l.toString()).toBe('4 2 1');
});

test('remove multiple values by value', () => {
  const l = new List(1, 2, 3, 3, 4, 3).remove(3);
  expect(l.toString()).toBe('4 2 1');
});

test('remove from head by value', () => {
  const l = new List(3, 2, 3).remove(3);
  expect(l.toString()).toBe('2');
});

test('remove all by value', () => {
  const l = new List(3, 3).remove(3);
  expect(l.toString()).toBe('');
});

test('filter elements', () => {
  const l = new List(1, 2, 3).filter((el) => el % 2 == 1);
  expect(l.toString()).toBe('3 1');
});

