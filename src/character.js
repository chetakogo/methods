/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
export default class Character {
  constructor(name, type) {
    if ((type === 'TestCharacter' || type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')
          && (name.length >= 2 && name.length <= 10) && (typeof name === 'string')) {
      this.name = name;
      this.type = type;
      this.health;
      this.level = 1;
      this.attack;
      this.defence;
    } else {
      throw new Error('Неверные данные');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Нельзя нанести урон умершему персонажу');
    }
  }
}
