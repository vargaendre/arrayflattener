describe("ArrayFlattener", function() {
    var arrayFlattener = new ArrayFlattener();

    it('should not change the one dimensional array', function() {
        var expectedOutput = [1,2,3];
        var result = arrayFlattener.flattenArray([1,2,3]);
        expect(result.length).toEqual(3);
        expect(result[2]).toEqual(3);
        expect(compareIntegerArrays(result, expectedOutput)).toEqual(true);
    });

    it('should flatten the two dimensional nested array', function() {
        var expectedOutput = [1,2,3];
        var result = arrayFlattener.flattenArray([1,2,[3]]);
        expect(result.length).toEqual(3);
        expect(result[2]).toEqual(3);
        expect(compareIntegerArrays(result, expectedOutput)).toEqual(true);
    });

    it('should flatten the three dimensional nested array', function() {
        var expectedOutput = [1,2,3,4];
        var result = arrayFlattener.flattenArray([1,2,[3,[4]]]);
        expect(result.length).toEqual(4);
        expect(result[3]).toEqual(4);
        expect(compareIntegerArrays(result, expectedOutput)).toEqual(true);
    });

    it('should flatten the complex, multi-dimensional nested array', function() {
        var expectedOutput = [1,2,3,4,5,6,7,8,9];
        var result = arrayFlattener.flattenArray([1,2,[3],4,[5],[[6,7,[8],9]]]);
        expect(result.length).toEqual(9);
        expect(result[8]).toEqual(9);
        expect(compareIntegerArrays(result, expectedOutput)).toEqual(true);
    });

    it('should return null on invalid input', function() {
        var result = arrayFlattener.flattenArray([1,2,4[3]]);
        expect(result).toEqual(null);
    });

    it('should return empty array if the input is an empty array', function() {
        var expectedOutput = [];
        var result = arrayFlattener.flattenArray([]);
        expect(result.length).toEqual(0);
        expect(compareIntegerArrays(result, expectedOutput)).toEqual(true);
    });

    it('should flatten arbitrary array containing a NaN', function() {
        var result = arrayFlattener.flattenArray([1,2,[3],4,NaN]);
        expect(result).toEqual(null);
    });
});

function compareIntegerArrays(array1, array2) {

    if (array1.length != array2.length)
        return false;

    for (var i = 0, l = array1.length; i < l; i++) {
        if (array1[i] instanceof Array && array2[i] instanceof Array) {
            if (!compareIntegerArrays(array1[i],array2[i]))
                return false;
        }
        else if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}