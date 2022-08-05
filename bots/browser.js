const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try {
        console.log('Abrindo o navegador...');
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'], 
        });
    } catch (error) {
        console.log('Não foi possível criar uma instância do navegador => :', error);
    }
    return browser;
}

module.exports = { startBrowser }