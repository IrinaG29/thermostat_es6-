'use strict';

class Thermostat{
  constructor() {
    this.temp = 20
    this.MIN_TEMP = 10
    this.powerSavingModeOn = true
  }

  isPowerSavingModeOn() {
    return (this.powerSavingModeOn)
  }

  getCurrentTemp() {
    return (this.temp)
  }

  isMinTemp() {
    return (this.temp === this.MIN_TEMP)
  }

  up() {
    this.temp += 1
  }

  down() {
    if (this.isMinTemp()){
      return;
    } else {
      this.temp -= 1
    }
  }
};
