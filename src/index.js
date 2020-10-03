exports.min = function min(array) {
    let res = 0;

    if (Array.isArray(array) && array.length !== 0) {
        array.reduce(function (preVal, Val) {
            res = preVal < Val ? preVal : Val;
            return res;
        });
    }

    return res;
};

exports.max = function max(array) {
    let res = 0;

    if (Array.isArray(array) && array.length !== 0) {
        array.reduce(function (preVal, Val) {
            res = preVal > Val ? preVal : Val;
            return res;
        });
    }

    return res;
};

exports.avg = function avg(array) {
    let res = 0;

    if (Array.isArray(array) && array.length !== 0) {
        array.map((item) => (res += item));
        let avg = res / array.length;
        return avg;
    }

    return res;
};
