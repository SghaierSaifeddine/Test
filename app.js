const { data } = require('./data.js');
const { filterData } = require('./filterData.js');
const { countData } = require('./countData.js');

let args = process.argv[2];


if (args && args.startsWith("--filter=")){
    if(filterData(data, args.split('=')[1]).length > 0){
        console.log(JSON.stringify(filterData(data, args.split('=')[1])))
    }else {
        console.log("No Result Found")
    }
    
}else if (args && args.startsWith("--count")){
    console.log(JSON.stringify(countData(data)));
}else {
    console.log("******** Put a valid argument Please ********")
}