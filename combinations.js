/**
 * Recursive combinations generator
 */

function generator(result, values, n, combination) {
    if (n === 0) {
        result.push(combination);

        return;
    }

    for ( var i = 0; i < values.length - (n - 1); i++) {
        var next = combination.slice();
        next.push(values[i]);
        generator(result, values.slice(i + 1), n - 1, next);
    }
}

/**
 * values is the array of itens
 * n is the size of each combination
 */
function combinations(values, n) {
    var result = [];

    if (n <= values.length) {
        generator(result, values, n, []);
    }

    return result;
}

/**
 * Usage
 */

var values = [1,2,3,4,5];
var result = combinations(values, 2);

/* Output - console.log(result);

[
  [ 1, 2 ],
  [ 1, 3 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 2, 3 ],
  [ 2, 4 ],
  [ 2, 5 ],
  [ 3, 4 ],
  [ 3, 5 ],
  [ 4, 5 ]
];

*/
