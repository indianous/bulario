const scraper = require('./pageScraper');

async function pageController(b){
    let browser = await b
    try {
        const page = await browser.newPage();
        await page.goto('https://www.google.com/');
        await page.type('input[type="text"]', 'Dorflex bula pdf');
        await page.click('input[aria-label="Pesquisa Google"]');
        await page.waitForSelector('div[role="navigation]"');
        await page.click('div[aria-label="Limpar"]');
        await page.waitForTimeout(3000);
        await page.type('input[type="text"]', 'Glifage bula pdf');
        await page.click('button[aria-label="Pesquisa Google"]');
    } catch (error) {
        console.log('', error);
    }
}

module.exports = (browser) => pageController(browser);