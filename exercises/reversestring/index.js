// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //1
    //return str.split('').reverse().join('');

    //2
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;

    //3
    //debugger;
    //return str.split('').reduce((rev, chr) => chr + rev, '');
}

reverse('asdf');

module.exports = reverse;
