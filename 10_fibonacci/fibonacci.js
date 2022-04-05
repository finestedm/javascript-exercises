const fibonacci = function (index) {
    if (index < 0) {
        return 'OOPS';
    } else {
        index = parseInt(index);
        sequence = [0];
        for (i = 0; i < index; i++) {
            if (sequence.length <= 1) {
                sequence.push(1);
            } else {
                var another = (sequence[i] + sequence[i - 1]);
                sequence.push(another);
            }
        }
        return sequence[index];
    }
};

// Do not edit below this line
module.exports = fibonacci;
