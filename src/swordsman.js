import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}
