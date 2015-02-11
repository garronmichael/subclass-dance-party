var Eagle = function(top, left, timeBetweenSteps){
  Dancer.call(this, 0, window.innerWidth, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('eagle');
  this.target;

  // this.$node.on('click', function(event){

  // })
  setTimeout(this.swoopIn.bind(this), 10);
  setTimeout(this.swoopOut.bind(this), 1000);
  setTimeout(this.remove.bind(this), 6000);
};

Eagle.prototype = Object.create(Dancer.prototype);
Eagle.prototype.constructor = Eagle;

Eagle.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

Eagle.prototype.swoopIn = function() {
  $('.eb').hide();
  this.target = window.dancers[0];
  var tx = parseInt((this.target.$node.css('top')).split('px')[0]);
  var ty = parseInt((this.target.$node.css('left')).split('px')[0]);
  this.$node.css({
    top: (tx - 50) + 'px',
    left: (ty - 50) + 'px',
    '-webkit-transition': '1s',
    'transition-timing-function': 'linear'
  });
};

Eagle.prototype.swoopOut = function() {
  var offScreen = {
    top: '-200px',
    left: '-200px',
    '-webkit-transition': '5s',
    'transition-timing-function': 'ease'
  };

  this.$node.css(offScreen);
  offScreen.top = '-120px';
  offScreen['transform'] = 'scale(.6)';
  this.target.$node.css(offScreen);

};

Eagle.prototype.remove = function () {
  $('.eb').show();
  this.$node.remove();
  this.target.$node.remove();
  window.dancers.shift();
  window.dancers.pop();

};
