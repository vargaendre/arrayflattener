function ArrayFlattener(){
}

ArrayFlattener.prototype.flattenArray = function(array) {

    var flattenedArray = [];

    try {
        return discoverArray(array, flattenedArray);
    }
    catch (err) {
        console.log(err.message);
        return null;
    }

    function discoverArray(array, flattenedArray) {

        if (array === undefined) {
            throw new Error("Error: found element 'undefined' in the input. " +
            "Flattened array so far: " + flattenedArray);
        }

        if (array.constructor === Array) {
            for (var i = 0; i < array.length; i++) {
                discoverArray(array[i], flattenedArray);
            }
        }
        else if (isNaN(array)){
            throw new Error("Error: found element 'NaN' in the input. " +
            "Flattened array so far: " + flattenedArray);
        }
        else {
            flattenedArray.push(array);
        }
        return flattenedArray;
    }
}