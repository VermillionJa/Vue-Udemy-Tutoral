new Vue({
    el: "#app",
    data: {
        link: "http://google.com"
    },
    methods: {
        changeLink() {
            this.link = "http://www.vuejs.org";
        }
    }
});