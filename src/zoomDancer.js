var makeZoomDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zoomRotate');
  this.$node.append('<img src="images/zoom.png" style="height:140px">');

};

makeZoomDancer.prototype = Object.create(makeDancer.prototype);

makeZoomDancer.prototype.constructor = makeZoomDancer;

// makeZoomDancer.prototype.step = function() {
//
//   makeDancer.prototype.step.call(this);
//
// };
