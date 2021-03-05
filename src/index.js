module.exports = function reverse(n) {
    let arr = String(n).split("").reverse();
    if (arr.includes("-")) {
        arr.length = arr.length - 1;
    }
    return Number(arr.join(""));
};
