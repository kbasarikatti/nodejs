function slowPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Slow function done");
      resolve();
    }, 300);
  });
}

const callbackify = require("util").callbackify;
const callbackSlow = callbackify(slowPromiseFunction);

callbackSlow((error, result) => {
  if (error) return console.log("Callback function received an error");
  return console.log("Callback resolved without errors");
});
