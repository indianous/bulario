var download = require('download-pdf');

/*async function downloadPDF(url, options){
    download(url, options, function(err){
        if (err) throw err
        console.log("Baixado com sucesso");
    })
}*/

const fs = require("fs");
const request = require("request-promise-native");

async function downloadPDF(url, outputFilename, data) {
    try{
        let pdfBuffer = await request.get({uri: url, encoding: null});
        console.log("Writing downloaded PDF file to " + outputFilename + "...");
        await fs.writeFileSync(outputFilename, pdfBuffer);
    }
    catch(error){
        console.log(`Não foi possível salvar o arquivo ${error}`);
        data.log.push(data.currentFile);
    }
}

//downloadPDF("https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/ecf_faq.pdf", "c:/temp/somePDF.pdf");

module.exports = { downloadPDF }