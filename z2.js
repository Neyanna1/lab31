function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

console.log(reverseNumber(123));  // Output: 321


function removeDuplicates(n) {
    return parseInt([...new Set(n.toString())].join(''));
}

console.log(removeDuplicates(111333456));  // Output: 13456


function countDigit(n, digit) {
    return n.toString().split(digit).length - 1;
}

console.log(countDigit(1355567, 5));  // Output: 3



function longestSequence(n) {
    const binary = n.toString(2);
    let maxSequence = 0;
    let currentSequence = 0;
    let prevDigit = null;

    for (let digit of binary) {
        if (digit === prevDigit) {
            currentSequence++;
        } else {
            currentSequence = 1;
            prevDigit = digit;
        }
        maxSequence = Math.max(maxSequence, currentSequence);
    }

    return maxSequence;
}

console.log(longestSequence(156));  // Output: 2
