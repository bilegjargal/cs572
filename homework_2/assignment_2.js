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
  console.log("start");

  setTimeout(_ => {
    console.log(test.odd());
  }, 0);

  process.nextTick(_ => {
    console.log(test.even());
  });
  console.log("end");
})();
