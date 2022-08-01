var downloadpdf = require('download-pdf')

async function downloadPDF(url, options){
    downloadpdf(url, options, function(error){
        if (error) throw error
        console.log(options.filename + ": Baixado com sucesso!!!")
    }) 
}

module.exports = { downloadPDF }