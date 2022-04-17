import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.health = 100;
    this.attack = 40;
    this.defence = 10;
  }
}
