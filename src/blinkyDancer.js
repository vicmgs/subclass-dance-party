var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('blinky');
    this.$node.append('<img src="images/blinky.png" style="height:70px">');
    this.step();
  }
  step () {
    super.step();
    // this.$node.toggle();
  }
};

// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.step = function() {
//   // this.$node.toggle();

//   makeDancer.prototype.step.call(this);

// };
