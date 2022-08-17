/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      text: "This is some text",
      fruits: ["apple", "orange", "banana", "kiwi"],
      newFruit: ""
    };
  },
  methods: {
    newMessage: function () {
      console.log("This functionis working");
      words = ["one", "two,", "three", "four", "five"];
      this.text= "The text has changed";
    },
    addFruit: function() {
      console.log(`adding fruit: ${this.newFruit}`);
      this.fruits.push(this.newFruit);
    }
  }
};



Vue.createApp(App).mount('#app');