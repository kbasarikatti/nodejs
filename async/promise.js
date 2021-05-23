function fastPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Fast function done");
      resolve();
    }, 100);
  });
}

function slowPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Slow function done");
      resolve();
    }, 300);
  });
}

function asyncRunner() {
  return Promise.all([slowPromiseFunction(), fastPromiseFunction()]);
}

asyncRunner()
  .then(([slowResult, fastResult]) => {
    console.log("All operations resolved successfully");
  })
  .catch((error) => {
    console.error("There has been an error:", error);
  });

/*######################## Promises with error */
function failingFunction() {
  return new Promise((resolve, reject) => {
    reject(new Error("This operation will surely fail!"));
  });
}

function asyncMixedRunner() {
  return Promise.allSettled([slowPromiseFunction(), failingFunction()]);
}

asyncMixedRunner().then(([slowResult, failedResult]) => {
  console.log(slowResult, failedResult);
});
