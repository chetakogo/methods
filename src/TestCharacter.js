import Character from './character';

export default class TestCharacter extends Character {
  constructor(name) {
    super(name, 'TestCharacter');
    this.health = -2;
    this.attack = 40;
    this.defence = 10;
  }
}
