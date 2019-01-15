(function() {
  let test = _ => {
    console.log("test method");
  };

  console.log("Main");
  setImmediate(() => console.log("immediate"), 0);
  console.log("Main after immediate");
  setTimeout(() => console.log("timeout"), 2000);
  console.log("Main after time out");

  process.nextTick(() => console.log("next tick"));
})();
