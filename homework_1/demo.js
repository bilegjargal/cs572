(function() {
  let a = 20;
  let test = () => {
    a = 10;
    console.log(process);
  };

  test();
})();
