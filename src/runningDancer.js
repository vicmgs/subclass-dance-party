var makeRunningDancer = class makeRunningDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.top = top;
    this.left = left;
    this.stop = false;
    this.count = 0;
    // makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('runner');
    this.$node.append('<img src="images/running.png" style="height:170px">');
    this.step();

  }
  step () {
    super.step();
    // this.$node.toggle();
    if (this.stop === false) {
      if (this.count < 6) {
        this.top = this.top + 20;
      } else if (this.count < 16) {
        this.top = this.top - 20;
      } else {
        this.top = this.top + 20;
      }

      this.setPosition(this.top, this.left);
      if (this.count > 20) {
        this.count = 1;
      }
      this.count++;
    }

  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);

  }
};
