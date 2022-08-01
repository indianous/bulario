const pageScraper = require('./pageScraper');

async function pageController(b){
    let browser = await b
    try {
        const page = await browser.newPage();
        await page.goto('https://www.google.com/');
        let drug = 'Dorflex'
        await newSearch(page, drug);
        drug = 'Glifage'
        await newSearch(page, drug);
    } catch (error) {
        console.log('', error);
    }
}

async function newSearch(page, drug){
    await page.waitForTimeout(1000);
    await page.type('input[name="q"]', drug + ' bula pdf');
    await page.waitForTimeout(1000);
    await page.click('[aria-label="Pesquisa Google"]');
    await page.waitForTimeout(1000);
    await page.click('div[aria-label="Limpar"]');
    console.log(drug + ": Pesquisado com sucesso!!!");
    await pageScraper.scraper(page, drug)    
}
module.exports = (browser) => pageController(browser);