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