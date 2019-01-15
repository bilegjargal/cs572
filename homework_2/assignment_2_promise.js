(function() {
  Array.prototype.even = function() {
    let result = this.filter(el => el % 2 == 0);
    return result;
  };

  Array.prototype.odd = function() {
    let result = this.filter(el => el % 2 != 0);
    return result;
  };

  let test = [1, 2, 3, 4, 5, 6, 7, 8];

  const promise_even = new Promise(function(resolve, reject) {
    let even = [];
    test.map(item => {
      if (item % 2 === 0) {
        even.push(item);
      }
    });
    if (even.length != 0) {
      resolve(even);
    } else {
      reject("Array is empty or not numeric");
    }
  });

  const promise_odd = new Promise(function(resolve, reject) {
    let odd = [];
    test.map(item => {
      if (item % 2 !== 0) {
        odd.push(item);
      }
    });
    if (odd.length != 0) {
      resolve(odd);
    } else {
      reject("Array is empty or not numeric");
    }
  });

  console.log("start");

  promise_even
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error);
    });

  promise_odd
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error);
    });

  console.log("end");
})();
