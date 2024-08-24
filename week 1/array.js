// Prime numbers
function filterPrimeNumbers(arr) {
    return arr.filter(num => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = filterPrimeNumbers(arr);
console.log(primeNumbers);


// 1470 Shuffle the array
var shuffle = function(nums, n) {
    let shuffledArr = [];

    for (let i = 0; i < n; i++) {
        shuffledArr.push(nums[i],nums[i + n]);
    }

    return shuffledArr;
};

let nums = [2, 5, 1, 3, 4, 7]
let n = 3;
console.log(shuffle(nums, n));


// 2455 Average Value of Even Numbers That Are Divisible by Three
var averageValue = function(nums) {
    let result = 0;
    let count = 0;
    for (let value of nums) {
        if (value % 2 == 0 && value % 3 == 0) {
            result += value;
            count++;
        }
    }
    if (count !== 0) {
        return Math.floor(result / count);
    } else {
        return 0
    }
};


// 26 Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] != nums[i]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
};

