const promisify = require("util").promisify;
function slowCallbackFunction(done) {
  setTimeout(function () {
    console.log("Timer done");
    done();
    console.log("done complete");
  }, 300);
}
const slowPromise = promisify(slowCallbackFunction);

slowPromise(() => {
  console.log("done called");
})
  .then(() => {
    console.log("Slow function resolved");
  })
  .catch((error) => {
    console.error("There has been an error:", error);
  });
