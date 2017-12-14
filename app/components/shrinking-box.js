import Ember from "ember";

//Refer to ember component documentation as necessary: http://emberjs.com/api/classes/Ember.Component.html
export default Ember.Component.extend({
  attributeBindings: ["label:aria-label", "tabindex"],
  defaultToLarge: Ember.on("init", function() {
    //http://emberjs.com/api/classes/Ember.Object.html#method_set
    this.set("isSmall", false);
  }),
  label: function() {
    return this.get("isSmall")
      ? this.get("smallMessage")
      : this.get("bigMessage");
  }.property("isSmall"),
  tabindex: 1,
  ariaRole: "button",

  //set in html-css-exercise template
  bigMessage: "",

  //set in html-css-exercise template template
  smallMessage: "",

  isSmall: false,

  classNames: ["shrinking-box"],

  //https://guides.emberjs.com/v2.12.0/components/customizing-a-components-element/
  classNameBindings: ["isSmall:is-small:is-large"],

  click: function() {
    //toggle this component's isSmall property here
    this.set("isSmall", !this.get("isSmall"));
  }
});
