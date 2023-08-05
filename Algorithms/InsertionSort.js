function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;

    while (j > -1 && array[j] > temp) {
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  return array;
}

let arr = [4, 3, 5, 1, 6, 2];
console.log(insertionSort(arr));
