(function () {
    const rxjs = require('rxjs');
    const { from } = rxjs;
    //const {map, filter} = rxjs.operators;
    String.prototype.filterWords = function (arr) {
        let text = this.toString();
        from(text).subscribe(i => { console.log(i); });
        return text;
    };

    const test = "This house is nice";
    const bannedWords = ["house", "nice"];
    console.log(test.filterWords(bannedWords));
})();
