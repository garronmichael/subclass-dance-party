var BouncyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.isBouncing = false;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var top = this.$node.css('top');
  top = parseInt(top.split('px')[0]);

  if (this.isBouncing) {
    top += 10;
    this.isBouncing = false;
  } else {
    top -= 10;
    this.isBouncing = true;
  }

  this.$node.css({
    'top': top + 'px',
    'border-color': 'green'
  });
};
BouncyDancer.prototype.oldStep = Dancer.prototype.step;
