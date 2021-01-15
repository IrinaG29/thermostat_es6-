'use strict';

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("contructor", function() {
    it("starts at 20 degrees", function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it("has power-saving mode on by default", function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe("switchPowerSavingModeOff", function() {
    it("can switch the power-saving mode off", function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it("can switch the power-saving mode back on", function(){
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe("when power saving mode is on", function() {
    it("has a max temp of 25 degrees", function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", function() {
    it("has a max temp of 32 degrees", function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("up", function() {
    it("increases the temperature", function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe("down", function() {
    it("decreases the temperature", function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it("has a minimum temp of 10 degrees", function(){
      for (var i = 0; i < 11; i ++){
        thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
        });
      });

  describe("get current temp", function() {
    it("returns current temp", function(){
      // thermostat.temp = 20
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("reset", function() {
    it("resets the temperature to 20", function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });
});
