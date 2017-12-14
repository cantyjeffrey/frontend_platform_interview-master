import Ember from "ember";
import isPast from "npm:date-fns/is_past";

export default Ember.Component.extend({
  setCurrentDate: Ember.on("init", function() {
    //override `today` property for integration tests
    if (!this.get("today")) {
      this.set("today", new Date());
    }
  }),

  today: null,
  card: null,
  classNames: ["credit-card", "text-left"],

  //binds class name of 'is-expire' when the `isExpired` property is true.
  classNameBindings: ["isExpired"],

  //returns true if `card` is expired, otherwise returns false.
  isExpired: Ember.computed(
    "card.expirationMonth",
    "card.expirationYear",
    function() {
      let { expirationMonth, expirationYear } = this.get("card");
      let cardDate = new Date(`${expirationMonth}/01/${expirationYear}`);
      return isPast(cardDate) ? true : false;
    }
  )
  /*

  exampleCard: {
    type: "Visa",
    accountNumber: 1234567890123456,
    name: "Jeremy Smith",
    expirationMonth: "12",
    expirationYear: "2016"
  },

*/
});
