const { createApp } = Vue;
const app = createApp({
    data() {
        return {
            appName: 'Electron Quick Start'
        }
    }
});

app.mount('#app');