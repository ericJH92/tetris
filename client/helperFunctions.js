export const deepClone = (input) => {
  if(typeof input === 'object') { //deep copy
    const clone = Array.isArray(input) ? [] : Object.create(Object.getPrototypeOf(input));
    for(const key in input) {
      clone[key] = deepClone(input[key]);
    }
    return clone;
  }
  return input;
}