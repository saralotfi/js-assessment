exports = typeof window === "undefined" ? global : window;

exports.asyncAnswers = {
  async: function (value) {},

  manipulateRemoteData: async function (url) {
    const result = [];
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.people.forEach((e) => {
          result.push(e.name);
        });
      });
    console.log(result.sort());
    return result.sort();
  },
};
