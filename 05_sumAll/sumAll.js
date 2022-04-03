const sumAll = function (low, high, step = 1) {

    if ((low < 0) || (high < 0) || (Number.isInteger(low) == 0) || (Number.isInteger(high) == 0)) {
        return 'ERROR';
    } else {
        if (low < high) {
            var start = low;
            var end = high;
        } else {
            var end = low;
            var start = high;
        }

        var result = Array(Math.ceil(((end + 1) - start) / step)).fill(start).map((x, y) => x + y * step);
        sum = 0
        for (i = 0; i <= result.length; i++) {
            sum += i;
        }
        return sum
    }
}

// Do not edit below this line
module.exports = sumAll;
