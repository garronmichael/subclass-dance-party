// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.step();

  this._timeBetweenSteps = timeBetweenSteps;

  this.$node.on('click', function(event){
    var y = parseInt(($(this).css('top')).split('px')[0]);
    var x = parseInt(($(this).css('left')).split('px')[0]);
    var closestDancer;
    var closestDistance;
    for(var i = 0; i < window.dancers.length; i++){
     var $dancer = window.dancers[i].$node;
     var partnerY = parseInt(($dancer.css('top')).split('px')[0]);
     var partnerX = parseInt(($dancer.css('left')).split('px')[0]);
     var dx = x - partnerX;
     var dy = y - partnerY;
     var dist = Math.sqrt(dx*dx + dy*dy);
     if(!closestDancer || dist > closestDistance) {
      closestDistance = dist;
      closestDancer = [$dancer, partnerX, partnerY];
     }
    }
    $(this).css({
      'top': closestDancer[2] + 'px',
      'left': closestDancer[1] + 'px'
    });
  })


};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


