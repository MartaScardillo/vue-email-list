const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            emailsGenerated: false,
            emailsTot: 10,
        };
    },

    methods: {
        fetchEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const email = res.data.response;
                    this.emails.push(email);
                    if (this.emails.length == this.emailsTot) {
                        this.emailsGenerated = true;
                    }
                });
        },
    },

    created() {
        for (let i = 0; i < this.emailsTot; i++) {
            this.fetchEmail();
        }
    },
}).mount('#app');
