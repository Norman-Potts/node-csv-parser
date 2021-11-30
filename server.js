

var fs = require('fs'); 
var csvParser = require('csv-parser');

const filepath = './example_data.csv'



fs.createReadStream(filepath)
    .on('error', () => {
        //// Check for errors with gien file path before start trying to pipe in its data.
    })

    .pipe(csvParser())
    .on('data', (row) => { 
        //// Returns each line of the csv row by row, accessible in its callback as row.
        console.log("on data");
    
        let str = `${row["BUYER NAME"]} bought ${row["CANDY PURCHASED"]} pieces of candy on ${row["PURCHASE DATE"]} and paid $${row["CASH PAID"]}.`;
        console.log(str)


    })
    .on('end', () => {
        //// Listens for the end of the CSV. You can use this event to cal methods you need after the entire file is read.
    })