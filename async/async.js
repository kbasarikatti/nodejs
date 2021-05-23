function fastPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Fast function done");
      resolve(1);
    }, 100);
  });
}

function slowPromiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Slow function done");
      resolve(2);
    }, 300);
  });
}

async function asyncRunner() {
  try {
    const slowResult = await slowPromiseFunction();
    const fastResult = await fastPromiseFunction();
    console.log("all done");
    return [slowResult, fastResult];
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finally called");
  }
}

asyncRunner().then((results) => {
  console.log(`result received: ${results}`);
});

/* for example 

// validateParams, dbQuery, serviceCall are thunks
async function handler () {
  try {
    await validateParams()
    const dbResults = await dbQuery()
    const serviceResults = await serviceCall()
    return { dbResults, serviceResults }
  } catch (error) {
    console.log(error)
  }
}
*/
