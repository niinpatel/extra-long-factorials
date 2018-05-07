/**
 * This function to add VERY large positive integers in javascript
 * Note - numbers should be passed as strings.
 * example -
 * add("15", "15");  // returns "30"
 */

function add(s1, s2) {

    let sum = "";

    let s1l = s1.length;
    let s2l = s2.length;

    let larger = (s1l > s2l) ? s1 : s2;
    let smaller = (larger === s1) ? s2 : s1;
    let largerl = larger.length;
    let smallerl = smaller.length;

    let carry = 0;
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < largerl; i++) {
        a = parseInt(larger.charAt(largerl - 1 - i));
        b = parseInt(smaller.charAt(smallerl - 1 - i));
        b = (b) ? b : 0;
        temp = (carry + a + b).toString();
        digitSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.substr(0, temp.length - 1));
        carry = (carry) ? carry : 0;

        sum = (i === largerl - 1) ? temp + sum : digitSum + sum;
    }
    return sum;
}
