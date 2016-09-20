var makeRotateDancer = function(top, left, timeBetweenSteps) {
  // this.oldStep = makeDancer.prototype.step;

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rotate');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};



makeRotateDancer.prototype = Object.create(makeDancer.prototype);

makeRotateDancer.prototype.constructor = makeRotateDancer;
// makeRotateDancer.prototype.oldStep = makeDancer.prototype.step;
makeRotateDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

};

// makeRotateDancer.prototype.setPosition = function(top, left) {
//
//   // call the old version of step at the beginning of any call to this new version of step
//   makeDancer.prototype.setPosition.call(this, top, left);
//   this.$node.addClass('rotate');
//
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//
// };
