$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    // var dancerMakerFunction = new window[dancerMakerFunctionName];
    // var danceMakerFunction = new Puppy;

    // make a dancer with a random position

    // var dancer = new Puppy(args);
    var dancer = new window[dancerMakerFunctionName](
      550 * Math.random() + 250,
      900 * Math.random() + 150,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUp").on("click", function(event){
    var $dancers = $(".dancer");
    for(var i = 0; i < $dancers.length; i++) {
      var $dancer = $($dancers[i]);
      $dancer.css('left', '20px');
    }
  });

  $(".scatter").on("click", function(event){
    var $dancers = $(".dancer");
    for(var i = 0; i < $dancers.length; i++) {
      var $dancer = $($dancers[i]);
      $dancer.css({
        top: (550 * Math.random() + 250) + 'px',
        left: (900 * Math.random() + 150) + 'px'
      });
    }
  });

  $()
});

