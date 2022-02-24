/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
//export
function trimSymbols(string, size) {

  let result = '';
  let prevLett = ''
  string.split('').map(reduce((item1, item2) => {
   let counter = 1;
    if (item1 === item2 && counter <= size) {
      counter += 1;
      result = result + item2
    }
  }))
  return result;
}

console.log(trimSymbols('xxx', 3));
 // 'xxx' - ничего не удалили т.к разрешено 3 символа подряд
// console.log(trimSymbols('xxx', 2)); // 'xx' - удалили один символ
// // trimSymbols('xxx', 1); // 'x'
// //
// console.log(trimSymbols('xxxaaaaa', 2)); // 'xxaa'
// trimSymbols('xxxaaaaab', 3); // 'xxxaaab'
