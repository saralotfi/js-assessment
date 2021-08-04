exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {},

  speak: function (fn, obj) {},

  functionFunction: function (str) {
    return (arg) => {
      return str + ", " + arg;
    };
  },

  makeClosures: function (arr, fn) {},

  partial: function (fn, str1, str2) {},

  useArguments: function (a, b = 0, c = 0, d = 0) {
    return a + b + c + d;
  },

  callIt: function (fn) {},

  partialUsingArguments: function (fn) {},

  curryIt: function (fn) {},
};
