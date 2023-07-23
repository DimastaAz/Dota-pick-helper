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
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'alchemist': {
                url:'icons/heroes/alchemist-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'ancient-apparition': {
                url:'icons/heroes/ancient-apparition-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'anti-mage': {
                url:'icons/heroes/anti-mage-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'arc-warden': {
                url:'icons/heroes/arc-warden-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'axe': {
                url:'icons/heroes/axe-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'bane': {
                url:'icons/heroes/bane-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'batrider': {
                url:'icons/heroes/batrider-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'beastmaster': {
                url:'icons/heroes/beastmaster-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'bloodseeker': {
                url:'icons/heroes/bloodseeker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'bounty-hunter': {
                url:'icons/heroes/bounty-hunter-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'brewmaster': {
                url:'icons/heroes/brewmaster-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'bristleback': {
                url:'icons/heroes/bristleback-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'broodmother': {
                url:'icons/heroes/broodmother-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'centaur-warrunner': {
                url:'icons/heroes/centaur-warrunner-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'chaos-knight': {
                url:'icons/heroes/chaos-knight-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'chen': {
                url:'icons/heroes/chen-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'clinkz': {
                url:'icons/heroes/clinkz-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'clockwerk': {
                url:'icons/heroes/clockwerk-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'crystal-maiden': {
                url:'icons/heroes/crystal-maiden-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'dark-seer': {
                url:'icons/heroes/dark-seer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'dark-willow': {
                url:'icons/heroes/dark-willow-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'dawnbreaker': {
                url:'icons/heroes/dawnbreaker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'dazzle': {
                url:'icons/heroes/dazzle-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'death-prophet': {
                url:'icons/heroes/death-prophet-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'disruptor': {
                url:'icons/heroes/disruptor-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'doom': {
                url:'icons/heroes/doom-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'dragon-knight': {
                url:'icons/heroes/dragon-knight-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'drow-ranger': {
                url:'icons/heroes/drow-ranger-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'earth-spirit': {
                url:'icons/heroes/earth-spirit-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'earthshaker': {
                url:'icons/heroes/earthshaker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'elder-titan': {
                url:'icons/heroes/elder-titan-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'ember-spirit': {
                url:'icons/heroes/ember-spirit-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'enchantress': {
                url:'icons/heroes/enchantress-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'enigma': {
                url:'icons/heroes/enigma-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'faceless-void': {
                url:'icons/heroes/faceless-void-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'grimstroke': {
                url:'icons/heroes/grimstroke-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'gyrocopter': {
                url:'icons/heroes/gyrocopter-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'hoodwink': {
                url:'icons/heroes/hoodwink-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'huskar': {
                url:'icons/heroes/huskar-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'invoker': {
                url:'icons/heroes/invoker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'io': {
                url:'icons/heroes/io-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'jakiro': {
                url:'icons/heroes/jakiro-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'juggernaut': {
                url:'icons/heroes/juggernaut-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'keeper-of-the-light': {
                url:'icons/heroes/keeper-of-the-light-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'kunkka': {
                url:'icons/heroes/kunkka-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'legion-commander': {
                url:'icons/heroes/legion-commander-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'leshrac': {
                url:'icons/heroes/leshrac-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lich': {
                url:'icons/heroes/lich-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lifestealer': {
                url:'icons/heroes/lifestealer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lina': {
                url:'icons/heroes/lina-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lion': {
                url:'icons/heroes/lion-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lone-druid': {
                url:'icons/heroes/lone-druid-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'luna': {
                url:'icons/heroes/luna-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'lycan': {
                url:'icons/heroes/lycan-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'magnus': {
                url:'icons/heroes/magnus-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'marci': {
                url:'icons/heroes/marci-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'mars': {
                url:'icons/heroes/mars-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'medusa': {
                url:'icons/heroes/medusa-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'meepo': {
                url:'icons/heroes/meepo-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'mirana': {
                url:'icons/heroes/mirana-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'monkey-king': {
                url:'icons/heroes/monkey-king-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'morphling': {
                url:'icons/heroes/morphling-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'muerta': {
                url:'icons/heroes/muerta-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'naga-siren': {
                url:'icons/heroes/naga-siren-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'natures-prophet': {
                url:'icons/heroes/natures-prophet-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'necrophos': {
                url:'icons/heroes/necrophos-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'night-stalker': {
                url:'icons/heroes/night-stalker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'nyx-assassin': {
                url:'icons/heroes/nyx-assassin-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'ogre-magi': {
                url:'icons/heroes/ogre-magi-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'omniknight': {
                url:'icons/heroes/omniknight-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'oracle': {
                url:'icons/heroes/oracle-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'outworld-destroyer': {
                url:'icons/heroes/outworld-destroyer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'pangolier': {
                url:'icons/heroes/pangolier-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'phantom-assassin': {
                url:'icons/heroes/phantom-assassin-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'phantom-lancer': {
                url:'icons/heroes/phantom-lancer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'phoenix': {
                url:'icons/heroes/phoenix-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'primal-beast': {
                url:'icons/heroes/primal-beast-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'puck': {
                url:'icons/heroes/puck-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'pudge': {
                url:'icons/heroes/pudge-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'pugna': {
                url:'icons/heroes/pugna-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'queen-of-pain': {
                url:'icons/heroes/queen-of-pain-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'razor': {
                url:'icons/heroes/razor-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'riki': {
                url:'icons/heroes/riki-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'rubick': {
                url:'icons/heroes/rubick-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'sand-king': {
                url:'icons/heroes/sand-king-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'shadow-demon': {
                url:'icons/heroes/shadow-demon-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'shadow-fiend': {
                url:'icons/heroes/shadow-fiend-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'shadow-shaman': {
                url:'icons/heroes/shadow-shaman-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'silencer': {
                url:'icons/heroes/silencer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'skywrath-mage': {
                url:'icons/heroes/skywrath-mage-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'slardar': {
                url:'icons/heroes/slardar-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'slark': {
                url:'icons/heroes/slark-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'snapfire': {
                url:'icons/heroes/snapfire-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'sniper': {
                url:'icons/heroes/sniper-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'spectre': {
                url:'icons/heroes/spectre-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'spirit-breaker': {
                url:'icons/heroes/spirit-breaker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'storm-spirit': {
                url:'icons/heroes/storm-spirit-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'sven': {
                url:'icons/heroes/sven-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'techies': {
                url:'icons/heroes/techies-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'templar-assassin': {
                url:'icons/heroes/templar-assassin-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'terrorblade': {
                url:'icons/heroes/terrorblade-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'tidehunter': {
                url:'icons/heroes/tidehunter-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'timbersaw': {
                url:'icons/heroes/timbersaw-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'tinker': {
                url:'icons/heroes/tinker-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'tiny': {
                url:'icons/heroes/tiny-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'treant-protector': {
                url:'icons/heroes/treant-protector-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'troll-warlord': {
                url:'icons/heroes/troll-warlord-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'tusk': {
                url:'icons/heroes/tusk-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'underlord': {
                url:'icons/heroes/underlord-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'undying': {
                url:'icons/heroes/undying-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'ursa': {
                url:'icons/heroes/ursa-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'vengeful-spirit': {
                url:'icons/heroes/vengeful-spirit-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'venomancer': {
                url:'icons/heroes/venomancer-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'viper': {
                url:'icons/heroes/viper-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'visage': {
                url:'icons/heroes/visage-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'void-spirit': {
                url:'icons/heroes/void-spirit-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'warlock': {
                url:'icons/heroes/warlock-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'weaver': {
                url:'icons/heroes/weaver-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'windranger': {
                url:'icons/heroes/windranger-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'winter-wyvern': {
                url:'icons/heroes/winter-wyvern-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'witch-doctor': {
                url:'icons/heroes/witch-doctor-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'wraith-king': {
                url:'icons/heroes/wraith-king-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            },
            'zeus': {
                url:'icons/heroes/zeus-icon.jpg',
                rating: 0,
                ratingRadiant: 0,
                ratingDire: 0,
                disabled: {'list-hero__grid__item_disabled':false},
            }
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
            //searching and hide heroes without same latters in names
            for (hero in this.heroes) {
                if (hero.includes(this.inputValue)) {
                    this.heroes[hero].disabled = {'list-hero__grid__item_disabled':false};
                } else {
                    this.heroes[hero].disabled = {'list-hero__grid__item_disabled':true};
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
    mounted() { //hook
        document.addEventListener( "keydown", this.onKeydown );
    }
});
BodyApp.mount('#body');