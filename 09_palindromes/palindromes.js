const palindromes = function (word) {
    var wordClean = word.replace(/[!,. ]/g, '').toLowerCase()
    var len = (wordClean.length);
    var wordReversed = '';
    for (i = 0; i <= len; i++) {
        wordReversed += wordClean.charAt(len - i);
    }
    if (wordReversed == wordClean) {
        return true
    } else {
        return false
    }
};

//wordReversed.slice(i, (i + 1))

// Do not edit below this line
module.exports = palindromes;
