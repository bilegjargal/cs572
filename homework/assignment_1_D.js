(function () {
    const rxjs = require('rxjs');
    const { of, from } = rxjs;
    const { map, filter, mergeMap } = require('rxjs/operators');//rxjs.operators;
    String.prototype.filterWords = function (arr) {
        let text = this.toString();
        let new_text = [];
        //if(arr.includes('This'))
        const source = from(text.split(' '));
        const emits = source.pipe(
            map(
                (val) => {
                    if (arr.includes(val) == true) {
                        val = '***';
                    }
                    return val;

                }));
        const subscribtion = emits.subscribe(
            i => {
                new_text.push(i);
                //    console.log(i);
            },
            null,
            i => { //console.log('done'); 
            }
        );
        return new_text.join(' ').toString();
    };

    const test = "This house is nice";
    const bannedWords = ["house", "nice"];
    if (test.includes(bannedWords[0]))
        console.log(test.filterWords(bannedWords));
})();
