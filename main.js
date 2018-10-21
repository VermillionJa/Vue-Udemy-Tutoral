new Vue({
    el: "#app",
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        result() {
            return this.counter > 5 ? "X > 5" : "X <= 5";
        }
    }
});