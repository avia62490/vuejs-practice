/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      text: "This is some text",
      number1: 4,
      number2: 7,
      number3: 10
    };
  },
  methods: function() {
    console.log
  }
};


Vue.createApp(App).mount('#app');
