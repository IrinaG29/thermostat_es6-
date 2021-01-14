'use strict';

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe("contructor", function() {
    it("starts at 20 degrees", function(){
      expect(thermostat.temp).toEqual(20);
    });

    it("has power-saving mode on by default", function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe("up", function() {
    it("increases the temperature", function(){
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });
  });

  describe("down", function() {
    it("decreases the temperature", function(){
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

    it("has a minimum temp of 10 degrees", function(){
      for (var i = 0; i < 11; i ++){
        thermostat.down();
        }
        expect(thermostat.getCurrentTemp()).toEqual(10);
        });
      });

  describe("get current temp", function() {
    it("returns current temp", function(){
      // thermostat.temp = 20
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });
  });
});
