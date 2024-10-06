
//find the most frequent character in a given string.
function getChar(str) {
    let map = {};
    str.split("").forEach(element => {
        map[element] = map[element] ? map[element] + 1 : 1;
    });

    let max = 1;
    let char = str[0];

    for (let k in map) {
        console.log(map[k])
        if (map[k] > max) {
            max = map[k];
            char = k;
        }
    }

    return char;
}

console.log(getChar("hello world")); // Output: 'l'
