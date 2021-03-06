
const CSVToJSON = require("csvtojson");
const JSONToCsV = require("json2csv").parse;
const FileSystem = require("fs");

// original source has no header row. use 'header1' 'header2' as its header row

 

CSVToJSON({
    noheader: true,
    headers: ["symboling", "normalized-losses", "make", "fuel-type", "aspiration", "num-of-doors", "body-style", 
    "drive-wheels", "engine-location", "wheel-base", "length", "width", "height", "curb-weight", "engine-type", "num-of-cylinders",
    "engine-size", "fuel-system", "bore", "stroke", "compression-ratio", "horsepower", "peak-rpm", "city-mpg", "highway-mpg", "price"],
    delimiter: [","]
    })
    .fromFile("./data/imports-85.data").then((json) => {
    console.log(json)

    FileSystem.writeFileSync("parse_data.json", JSON.stringify(json), "utf-8", (err) => { 
        if(err) console.log(err)
    })
})