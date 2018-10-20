new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        link: "http://google.com",
        finishedLink: `<a href="http://vuejs.org">Vue.JS</a>`
    },
    methods: {
        sayHello() {
            this.title = "Hewwo!!";
            return this.title;
        }
    }
});