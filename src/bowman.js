import Character from './character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.health = 100;
    this.attack = 25;
    this.defence = 25;
  }
}
