const pageScraper = require('./pageScraper');
const state = require('./state');

async function pageController(b){
    let browser = await b
    let drugs = state.loadDrugs();
    let data = state.load();
    try {
        await state.save(data);
        data.currentFile = i;
        const page = await browser.newPage();
        console.log('Indo para: ');
        console.log('https://www.google.com/');
        await page.goto('https://www.google.com/search?q=l');
        for (let i = data.currentFile; i < drugs.length; i++) {
            console.log(`Medicamento (${i + 1}/${drugs.length})`);
            await newSearch(page, drugs[i], data);
            // console.log(`Medicamento (${8 + 1}/${drugs.length})`);
            // await newSearch(page, drugs[8], data);
            console.log(`Medicamento atual: ${data.currentFile}`);
            console.log(`Medicamento com pane: ${data.log}`);
        }
        await browser.close();
    } catch (error) {
        console.log('Erro:', error);
    }
}

async function newSearch(page, drug, data){
    try {
        await page.waitForTimeout(3000);
        await page.click('[aria-label="Limpar"]');
        console.log(`Buscando medicamento: ${drug.medicamento}`);
        await page.type('input[name="q"]', drug.medicamento + ' bula pdf');
        await page.waitForTimeout(3000);
        await page.click('[aria-label="Pesquisa Google"]');
        console.log("Pesquisado com sucesso!!!");
        await pageScraper.scraper(page, drug, data);
    } catch (error) {
        console.log(`Não foi possível buscar o medicamentos: ${error}`);
    }
}
module.exports = (browser) => pageController(browser);