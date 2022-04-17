/* eslint-disable no-undef */
import Bowman from '../bowman';
import TestCharacter from '../TestCharacter';

test('method levelUp', () => {
  const result = new Bowman('Rick');
  result.levelUp();
  const expected = {
    name: 'Rick',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(result).toEqual(expected);
});

test('method levelUp dead', () => {
  const result = new TestCharacter('Rick');
  const expected = 'Нельзя повысить уровень умершего';
  expect(() => result.levelUp()).toThrowError(expected);
});

test('method damage', () => {
  const result = new Bowman('Rick');
  result.damage(10);
  const expected = {
    name: 'Rick',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('method damage dead', () => {
  const result = new TestCharacter('Rick');
  const expected = 'Нельзя нанести урон умершему персонажу';
  expect(() => result.damage(10)).toThrowError(expected);
});
