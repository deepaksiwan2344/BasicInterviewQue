//CallbackHell
// Callback Hell is a situation in JavaScript where multiple nested callbacks are
// used to perform asynchronous operations

setTimeout(function () {
  console.log("hello1");
  setTimeout(function () {
    console.log("hello2");
    setTimeout(function () {
      console.log("hello3");
      setTimeout(function () {
        console.log("hello4");
        setTimeout(function () {
          console.log("hello5");
          setTimeout(function () {
            console.log("hello6");
            setTimeout(function () {
              console.log("hello7");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


//How to remove callbackhell in javascript
// Callback hell can be avoided in JavaScript by using various techniques such as Promises,
// async/await, and libraries. Here is an example of how to use Promises to remove callback
// hell in JavaScript:

function getDataFromServer() {
  return new Promise(function (resolve, reject) {
    ajaxRequest(url1)
      .then(function (response1) {
        return ajaxRequest(url2 + response1.id);
      })
      .then(function (response2) {
        return ajaxRequest(url3 + response2.name);
      })
      .then(function (response3) {
        resolve(response3);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

