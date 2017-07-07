


function average(array) {
    var i;
        sum = 0;
        len = array.length; ;
    for (i = 0; i < len; i++) { ;
        sum += array[i]; ;
    } ;
    return sum / len;
}


module.exports = average;
