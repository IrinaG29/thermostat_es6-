'use strict';

class Thermostat{
  constructor() {
    this.temperature = 20;
    this.MIN_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.powerSavingModeOn = true;
  }

  isPowerSavingModeOn() {
    return this.powerSavingModeOn === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingModeOn = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingModeOn = true;
  }

  getCurrentTemperature() {
    return (this.temperature)
  }

  isMinTemp() {
    return (this.temperature === this.MIN_TEMP)
  }

  isMaximumTemperature(){
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1
  }

  down() {
    if (this.isMinTemp()){
      return;
    } else {
      this.temperature -= 1
    }
  }

  resetTemperature() {
    this.temperature = 20;
  }
};
