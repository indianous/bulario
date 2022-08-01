const download = require('./download');

const scraper = {
    async scraper(page, drug){
        try {
            await page.waitForTimeout(1000);
            const url = await page.$eval(".g a", a => a.href);
            await download.downloadPDF(url, { directory: './pdfs/', 
            filename: drug + ".pdf"});
        } catch (error) {
            console.log('não foi possível varrer a página => :', error);
        }
    }
}

module.exports = scraper