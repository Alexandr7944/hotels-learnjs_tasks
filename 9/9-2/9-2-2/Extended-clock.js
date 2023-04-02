import Clock from "./Clock.js";

class ExtendedClock extends Clock {
  constructor(args) {
    super(args);
    let {precision = 1000} = args;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
};

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 2000
});

lowResolutionClock.start();