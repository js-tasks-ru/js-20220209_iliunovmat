/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let obj1 = obj;
  for (const key of Object.keys(obj1)){
    for (let item1 of fields) {
      if (key === item1) {
        delete obj1[key];
        break;
      }
    }
  }
  return obj1;
};


