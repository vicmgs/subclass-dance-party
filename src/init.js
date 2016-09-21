$(document).ready(function() {
  window.dancers = [];
  window.count = 0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * 0.8 * Math.random() + 100,
      $("body").width() * 0.8 * Math.random() + 100,
      100
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  //line up dancers
  $('.lineUp').on('click', function(event) {
    var top = 400;
    var left = 10+'%';
    var perc = 80/window.dancers.length;
    window.dancers.forEach(function(dancer) {
      dancer.lineUp(top, left);
      dancer.stop = true;
      left = (Number(left.substring(0,2))+perc) + '%';

    });
  });

  //line up dancers
  $('.slothStop').on('click', function(event) {
    var top = 400;
    var left = 10;

    var slothdancers = window.dancers.filter(function(dancer){
      return dancer.constructor === makeRunningDancer;
    });
    // var perc = 80/window.dancers.length;
    slothdancers.forEach(function(dancer) {
      dancer.top = top;
      dancer.left = left;
      dancer.stop = true;
      dancer.lineUp(top, left);
      // left = (Number(left.substring(0,2))+perc) + '%';

    });
  });

  //Spread out dancers
  $('.spreadOut').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      var top = $("body").height() * 0.8 * Math.random() + 50;
      var left = $("body").width() * 0.8 * Math.random() + 50;
      dancer.lineUp(top, left);
      dancer.stop = false;
    });
  });

  //change background image
  $('.changeBG').on('click', function(event) {
    if (window.count === 3){
      window.count = 0;
    }
    var pics = ['url(images/bg1.jpg)', 'url(images/bg2.jpg)', 'url(images/bg3.jpg)'];

    $('body').css({
      'background-image' : pics[window.count],
      'background-size' : 'cover',
      'background-repeat' : 'no-repeat'
    });
    count++;
  });

  //dancer interaction
  //track positions of mouseDancer and zoomDancer
    //if positions are equal
      //make mouseDancer do....
      //make zoomDancer do...


});
