import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
  }
}
