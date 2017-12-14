import Ember from "ember";

export default Ember.Component.extend({
  init: function() {
    this.initializeSequence();
    this._super();
  },

  initializeSequence: function() {
    //geometric sequence of ^2: 1, 2, 4, 8, 16, etc...
    this.set("geometricSequence", Ember.A([1, 2, 4]));
  },

  classNames: ["geometric-sequence"],

  //set in component initializer
  geometricSequence: null,

  // Clone `geometricSequence`, sorting elements from largest to smallest:
  reversedSequence: Ember.computed.sort("geometricSequence", function(a, b) {
    return a < b ? 1 : -1;
  }),

  // Clone `reversedSequence`, filtering items to only the first ten, which is
  // consumed in hbs template:
  filteredSequence: Ember.computed.filter("reversedSequence", function(i, idx) {
    return idx < 10;
  }),

  actions: {
    updateSequence: function() {
      let condition = Math.pow(2, 15);
      let sequence = this.get("geometricSequence");
      let prev = sequence.pop();

      // If condition is met, re-initialize array:
      if (prev === condition) {
        return this.initializeSequence();
      }
      // Otherwise, set geometricSequence to a newly spread array:
      return this.set("geometricSequence", [...sequence, prev, prev * 2]);
    }
  }
});
