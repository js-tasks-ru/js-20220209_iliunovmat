/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)){
    for (const item1 of fields) {
      if (key === item1) {
        newObj[item1] = value;
      }
    }

  }
  return newObj;
};

