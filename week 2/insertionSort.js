function insertionSort(arr) {
    // The outer loop iterates over each element in the array, starting from index 0
    for (let i = 1; i < arr.length; i++) {
        // 'key' is the current element to be inserted into the sorted portion of the array
        let key = arr[i];
        // 'j' is used to traverse the sorted portion of the array
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than 'key'
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element arr[j] to the right
            j = j - 1; // Move 'j' to the left
        }
        // Insert the 'key' into its correct position
        arr[j + 1] = key;
    }
    return arr;
}

const arr = [8, 20, -2, 4, -6];
console.log(insertionSort(arr));