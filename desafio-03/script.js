var cards = [
    {
        "titulo" : "Título do card",
        "texto" : "Texto do card",
    },
    {
        "titulo" : "Título do card",
        "texto" : "Texto do card",
    },
    {
        "titulo" : "Título do card",
        "texto" : "Texto do card",
    }
];

const page = {
    data() {
        return {   
            cards: window.cards
        }
    },
    methods: {
    }
};

Vue.createApp(page).mount('#app');