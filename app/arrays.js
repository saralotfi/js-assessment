exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  remove: function (arr, item) {
    return arr.filter((e) => e !== item);
  },

  removeWithoutCopy: function (arr, item) {
    let length = arr.length;

    for (let i = 0; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        length--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    let count = 0;
    arr.forEach((e) => e === item && count++);
    return count;
  },

  duplicates: function (arr) {
    let seen = {};
    const dupes = [];

    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        seen[arr[i]] += 1;
      } else {
        seen[arr[i]] = 1;
      }
    }

    for (const item in seen) {
      if (seen[item] > 1) {
        dupes.push(+item); // create integer of string key name
      }
    }

    return dupes;
  },

  square: function (arr) {
    arr2 = arr.map((e) => e * e);
    return arr2;
  },

  findAllOccurrences: function (arr, target) {
    results = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        results.push(i);
      }
    }
    return results;
  },
};
