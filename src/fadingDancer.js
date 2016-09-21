var makeFadingDancer = class makeFadingDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('fading');
    this.$node.append('<img src="images/fading.png" style="height:350px">');
    this.step();
  }
}
// }function(top, left, timeBetweenSteps) {
//
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('fading');
//   this.$node.append('<img src="images/fading.png" style="height:350px">');
//
// };


// makeFadingDancer.prototype.step = function() {
//
//   makeDancer.prototype.step.call(this);
//
// };
