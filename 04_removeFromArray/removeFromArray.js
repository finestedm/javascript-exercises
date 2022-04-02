const removeFromArray = function (arr, ...remover) {
    let arrClean = arr;
    let len = remover.length;
    for (let i = 0; i < len; i++) {
        var index = arrClean.indexOf(remover.[i]);
        if (index !== -1) {
            arrClean.splice(index, 1);
        }
    }
    return arrClean
}


// Do not edit below this line
module.exports = removeFromArray;
