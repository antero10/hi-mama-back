import App from './server';
void async function() {
    const app = new App();
    await app.start();
}();
