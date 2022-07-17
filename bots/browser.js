const puppeteer = require('puppeteer');

async function startBrowser(){
    let browser;
    try {
        console.log('abrindo o navegador...');
        browser = await puppeteer.launch({
            headless: false,
        });
    } catch (error) {
        console.log('Não foi possível criar uma instância do navegador => :', error);
    }
    return browser;
}

module.exports = { startBrowser }