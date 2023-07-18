const app = Vue.createApp({
    // data: function() {}
    data() {
        return {
            courseGoal: 'Hello',
            Link: 'https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial/Paths'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!'
            } else {
                return 'Master Vue!'
            }
        }
    }
});
app.mount('#user-goal');

const app2 = Vue.createApp({
    data() {
        return {
            a: 1
        }
    },
    methods: {
        inputAlert(event) {
            console.log(event);
        }
    }
});
app2.mount('#test-area');