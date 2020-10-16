/**
 * Challenge statement : https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
 * Growth of a Population
 */

function nbYear(p0, percent, aug, p) {
    // your code

    percent = percent / 100;

    let n = 0;
    while (p0 < p) {
        p0 = p0 + p0 * percent + aug;
        n++;
    }
    return n;
}
