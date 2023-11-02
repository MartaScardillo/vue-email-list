const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
        };
    },

    methods: {
        fetchEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    const email = res.data.response;
                    this.emails.push(email);
                });
        },
    },

    created() {
        for (let i = 0; i < 10; i++) {
            this.fetchEmail();
        }
    },
}).mount('#app');
