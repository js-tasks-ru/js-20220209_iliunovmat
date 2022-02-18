/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = [...arr];
  newArr = sortAsc(newArr);
  if (param === 'desc') {
    return newArr.reverse();
  } else {
    return newArr;
  }
}

function sortAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j].localeCompare(arr[j + 1], ['ru', 'en'], {caseFirst: 'upper'}) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }



  }

  return arr;
}

