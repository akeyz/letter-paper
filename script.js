const app = new Vue({
    el: '#app',
    data: {
        lines: [],
    },
    created() { },
    mounted() { },
    methods: {
        addLine() {
            this.lines.push(this.lines.length + 1);
        }
    }
})