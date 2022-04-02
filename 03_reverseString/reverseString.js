const reverseString = function (string) {
    reversedString = '';
    len = ((string.length) + 1);
    for (let i = 1; i < len; i++) {
        reversedString += string.charAt(string.length - i);
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
