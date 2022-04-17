import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}
