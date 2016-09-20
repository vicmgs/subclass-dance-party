var makeMouseDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mouseOver');
  this.$node.append('<img src="images/mouseDancer.png" style="height:130px">');

  // $('.mouseOver')
  // var context = this;
  // context.$node.bind({
  //   mouseenter: function(e) {
  //   context.$node.hide();},
  //   mouseleave: function(e) {
  //   context.$node.show();}
  // });
  var context = this;
  this.$node.on('mouseenter', function(event) {

    context.$node.append('<p>this is weird</p>');

  });
};

makeMouseDancer.prototype = Object.create(makeDancer.prototype);

makeMouseDancer.prototype.constructor = makeMouseDancer;

// makeMouseDancer.prototype.step = function() {
//   // this.$node.toggle();
//
//   makeDancer.prototype.step.call(this);
//
// };
//
// makeMouseDancer.prototype.toggle = function() {
//   this.$node.toggle();
//
//
// };
