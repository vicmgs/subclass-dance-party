describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('zoomDancer', function() {

  var zoomDancer, clock;
  var timeBetweenSteps = 400;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    zoomDancer = new makeZoomDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(zoomDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node zoom', function() {
    // sinon.spy(zoomDancer.$node);
    // zoomDancer.step();
    // console.log(zoomDancer.$node);
    // expect(zoomDancer.$node[0].className).to.be.equal('dancer zoomRotate');
    sinon.spy(makeZoomDancer.$node, 'addClass');
    makeZoomDancer();
    expect(makeZoomDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(zoomDancer, 'step');
      expect(zoomDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(zoomDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(zoomDancer.step.callCount).to.be.equal(2);
    });
  });
});
