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
      expect(thermostat.temp).toEqual(20);
    });
  });
});
