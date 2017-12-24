//Get reference to csvtojson npm library
const csv2Json = require('csvtojson')
//Get reference to filesytem library to read/write files
const fs = require('fs')
//Get reference to file path
const path = require('path')

const csvFile = path.join(__dirname,'customer-data.csv')
const convert = (inputFile) =>{
    let buff = []
    console.log('Starting the conversion from CSV to Json')
    //using buildin function of the library to process the file
    csv2Json().fromFile(inputFile)
    .on('json',(data)=>{
        buff.push(data);
    })
    .on('end',()=>{
        fs.writeFileSync(path.join(__dirname,'customer-data.json'),JSON.stringify(buff,null,2))
        console.log('Finished the conversion!')
    })
    .on('error', (err) =>{
        console.log(`Error: ${err.message}`)
    })
}

//calling the convert method to process the file
convert(csvFile)