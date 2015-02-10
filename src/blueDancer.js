var BlueDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.on('mouseover', function(event){
    var top = parseInt(($(this).css('top')).split('px')[0]);
    var left = parseInt(($(this).css('left')).split('px')[0]);
    $(this).css({
    'border-radius': '50%',
    'padding': '20px',
    'background-color': 'blue',
    'top': (top - 20) + 'px',
    'left': (left - 20) + 'px'
    });
  });

  this.$node.on('mouseout', function(event){
    var top = parseInt(($(this).css('top')).split('px')[0]);
    var left = parseInt(($(this).css('left')).split('px')[0]);
    $(this).css({
    'padding': '0px',
    'top': (top + 20) + 'px',
    'left': (left + 20) + 'px'
    });
  });
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css({
  border: '10px solid blue'
  });
};
BlueDancer.prototype.oldStep = Dancer.prototype.step;


