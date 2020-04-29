import lodash from 'lodash';

export function union(arr) {
  return [...new Set(arr)]
};
export function toString(arr, separator) {
  return lodash.join(arr, separator)
}
export function timesString(time) {
  return lodash.times(times, String);
}

export function concat(arr) {
  return lodash.concat(arr, Array.from(arguments).slice(1));
}
