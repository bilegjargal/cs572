(function () {

    async function filteredWords(arr) {
        const self = this;
        const helper = function (self) {
            arr.map(
                (item) => {
                    self = self.replace(item, '***');
                }
            )
            return self;
        }
        const new_string = helper(self);
        console.log(self, this, new_string);
        const promise = function () {
            return new Promise(function (resolve, reject) {
                if (new_string === self) {
                    reject(self);
                }
                else
                    resolve(new_string);
            });
        }
        promise()
            .then((n) => { console.log('some words are filtered: ', n); })
            .catch((i) => { console.log('no word is filtered: ', i); });
    };
    String.prototype.filterWords = filteredWords;
    let test = "This house is nice";
    let bannedWords = ["house1", "nice1"];
    console.log(test.filterWords(bannedWords));
    console.log(test === 'This house is nice');
})()
