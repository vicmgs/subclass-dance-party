var makeFadingDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fading');
  this.$node.append('<img src="images/fading.png" style="height:350px">');

};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);

makeFadingDancer.prototype.constructor = makeFadingDancer;

// makeFadingDancer.prototype.step = function() {
//
//   makeDancer.prototype.step.call(this);
//
// };
