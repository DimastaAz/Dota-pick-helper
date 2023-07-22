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
////////////////////////////////////////////////////////////////////////////////////////////////
const BodyApp = Vue.createApp({
    data() {
    return {
        inputValue: '',
        heroes: { 
            'abaddon': {
                url:'icons/heroes/abaddon-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'alchemist': {
                url:'icons/heroes/alchemist-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'ancient-apparition': {
                url:'icons/heroes/ancient-apparition-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'anti-mage': {
                url:'icons/heroes/anti-mage-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'arc-warden': {
                url:'icons/heroes/arc-warden-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'axe': {
                url:'icons/heroes/axe-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
            'bane': {
                url:'icons/heroes/bane-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                grayPanel: {'list-hero__grid__item__gray-panel_active':false},
            },
        }
    }},
    methods: {
        // input changing method that "listen to" keyDown and uses hook mounted()
        onKeydown(event) {
            event.preventDefault(); //prevent space button from scrolling down page
            if (!(event.key == 'Shift' || event.key == 'Control' || event.key == 'Alt' || event.key == 'Escape' || event.key == 'End' || event.key == 'Home' || event.key == 'Meta' || event.key == 'Enter' || event.key == 'CapsLock' || event.key == 'Tab' || event.key == 'F1' || event.key == 'F2' || event.key == 'F3' || event.key == 'F4' || event.key == 'F5' || event.key == 'F6' || event.key == 'F7' || event.key == 'F8' || event.key == 'F9' || event.key == 'F10' || event.key == 'F11' || event.key == 'F12')) {
                if (event.key != 'Backspace') {
                    this.inputValue = this.inputValue + event.key;
                } else {
                    this.inputValue = this.inputValue.slice(0, -1);
                }
            }

            for (hero in this.heroes) { //searching and highlight heroes with same latters in names
                if (hero.includes(this.inputValue)) {
                    this.heroes[hero].grayPanel = {'list-hero__grid__item__gray-panel_active':false};
                } else {
                    this.heroes[hero].grayPanel = {'list-hero__grid__item__gray-panel_active':true};
                }
            }
        },
        calculateRating() {
            for (hero in this.heroes) {
                this.heroes[hero].rating = Math.max(this.heroes[hero].ratingRadiant, this.heroes[hero].ratingDire);
            }
            console.log(this.heroes);
        },
    },
    mounted() {
        document.addEventListener( "keydown", this.onKeydown );
    }
});
BodyApp.mount('#body');