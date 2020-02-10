var Trillo = Trillo || {};

Trillo.functions = new function() {
  'use strict';

  this.init = function() {
    this.alert();
  };

  this.alert = function() {
    console.log(1);
  };
};

document.addEventListener('DOMContentLoaded', function(event) {
  Trillo.functions.init();
});