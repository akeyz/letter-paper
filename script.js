const app = new Vue({
    el: '#app',
    data: {
        lines: [],
    },
    created() { },
    mounted() { },
    methods: {
        addRow() {
            this.lines.push(this.lines.length + 1);
        }
    }
})