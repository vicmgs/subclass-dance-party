// Creates and returns a new dancer object that can step
var makeDancer = class makeDancer {
  // use jQuery to create an HTML <span> tag
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<div class="dancer"></div>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);

  }
  step () {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
  lineUp (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};


// makeDancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step

// };

// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/


// };

// makeDancer.prototype.lineUp = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/

//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };
