const drugs = require('../drugs.json');
const fs = require('fs');

function save (data){
    const dataString = JSON.stringify(data);
    return fs.writeFileSync('./data.json', dataString);
}

function load (){
    const fileBuffer = fs.readFileSync('./data.json', 'utf-8');
    const data = JSON.parse(fileBuffer);
    return data;
}

function loadDrugs(){
    return drugs;
}

module.exports = { save, load, loadDrugs }