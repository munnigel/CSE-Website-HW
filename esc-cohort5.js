// Q1
function gcd(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if (x < 0 || y < 0) {
        throw new Error('Both arguments must be positive');
    }
    if (x === 0 || y === 0) {
        return 0;
    }
    if (x === y) {
        return x;
    }
    if (x > y) {
        return gcd(x - y, y);
    }
    return gcd(x, y - x);


}
console.log(gcd(2154, 458));

// Q2
function parseCSV(csvfile) {
    var csv = [];
    var lines = csvfile.split("\n");
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].split(",");
        for (var j = 0; j < line.length; j++) {
            line[j] = line[j].trim();
        }
        csv.push(line);
    }
    return csv;
}

// Q3

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 3, 5, 2, 4, 6]));