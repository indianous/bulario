const download = require('./download');

const scraper = {
    async scraper(page, drug, data){
        try {
            const source = `./pdfs/${drug.pasta}/${drug.apresentacao}/${drug.medicamento}.pdf`;
            await page.waitForTimeout(1000);
            const url = await page.$eval(".g a", a => a.href);
            // console.log(as);
            // const url = as.map(function(a){
            //     return a.href;
            // })
            // console.log(url);
            await download.downloadPDF(url, source, data);
            console.log('Salvo com sucesso!!!');
        } catch (error) {
            console.log('Não foi possível Baixar => :', error);
        }
    }
}

module.exports = scraper