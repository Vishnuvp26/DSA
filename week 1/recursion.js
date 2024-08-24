// factorial of a number
function factorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    
    return num * factorial(num - 1)
};

console.log(factorial(5))


// string reverse
function reverseString(str) {
    if(str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str[0];
};

console.log(reverseString('JAVASCRIPT'))


// sum of array
function sumArray(arr) {
    if(arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.splice(1));
};

console.log(sumArray([1, 2, 3, 4]));