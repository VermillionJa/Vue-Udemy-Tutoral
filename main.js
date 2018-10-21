new Vue({
    el: "#app",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        incrementCounter(step, e) {
            this.counter += step;
        },
        updateCoordinates(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        alertMe() {
            console.log("Enter pressed");
        }
    }
});