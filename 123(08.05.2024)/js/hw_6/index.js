function filter(arr, dataType) {
    
    let filterArray = [];
    
    arr.forEach(function(item) {    
        if (typeof item !== dataType) {      
            filterArray.push(item);
        }
    });

    return filterArray;
}

let array = ['hello', 'world',14, 23, '23', null];
let filteredResult = filter(array, 'string');
console.log(filteredResult); // [23, null]
