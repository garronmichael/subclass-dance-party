var Bunny = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

Bunny.prototype = Object.create(Dancer.prototype);
Bunny.prototype.constructor = Bunny;

Bunny.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
