(function() {
    String.prototype.filterWords = function(arr) {
      let text = this.toString();

      return text;
    };
  
    const test = "This house is nice";
    const bannedWords = ["house", "nice"];
    console.log(test.filterWords(bannedWords));
  })();
  