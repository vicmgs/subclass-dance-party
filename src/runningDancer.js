var makeRunningDancer = class makeRunningDancer extends makeDancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // this.top = top;
    // this.left = left;
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
        this.top = this.top + 60;
      } else if (this.count < 16) {
        this.top = this.top - 60;
      } else {
        this.top = this.top + 60;
      }

      this.setPosition(this.top, this.left);
      if (this.count > 20) {
        this.count = 1;
      }
      this.count++;
    }

    var context = this;

    var notsloths = window.dancers.filter(function(dancer){
      return dancer.constructor !== makeRunningDancer;
    });
    //loop through all window dancers
    notsloths.forEach(function(dancer) {
      //calculate distance using pythagoreum theorem
      var distance = Math.sqrt(Math.pow((dancer.top - context.top), 2) + Math.pow((dancer.left - context.left), 2));
      //if distance less than 20px
      if (distance < 200) {
        //window dancer moves to left
        dancer.top =  $("body").height() * 0.8 * Math.random() + 50;
        dancer.left =  $("body").width() * 0.8 * Math.random() + 50;
        dancer.setPosition(dancer.top, dancer.left);

      }
    })


  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);

  }
};
