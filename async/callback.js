function fastFunction(done) {
  setTimeout(function () {
    done(null, "fast function done");
  }, 100);
}

function slowFunction(done) {
  setTimeout(function () {
    done(null, "slow function done");
  }, 300);
}

// callback hell , pyramid of doom
function runSequentially(callback) {
  fastFunction((err, data) => {
    if (err) return callback(err);
    console.log(data); // results of a

    slowFunction((err, data) => {
      if (err) return callback(err);
      console.log(data); // results of b

      // here you can continue running more tasks
    });
  });
}

/* for example
function handler(done) {
  validateParams((err) => {
    if (err) return done(err);
    dbQuery((err, dbResults) => {
      if (err) return done(err);
      serviceCall((err, serviceResults) => {
        done(err, { dbResults, serviceResults });
      });
    });
  });
}*/

runSequentially();
