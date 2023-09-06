// ......................................SINGLE FOR LOOP..........................................//

// //print the loop..............

// var a = [8, 9, 10, 11];
// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// //add....................

// var a = [121, 100, 187, 437];

// var s = 0;
// for (var i = 0; i < a.length; i++) {
//     s += a[i];
// }
// console.log(s);

// //max .......................
// var a = [8, 9, 10, 18];
// var m = a[0];
// for (var i = 0; i < a.length; i++) {
//     m = a[i];
// }
// console.log(m);

// //exist or not.......................
// var v = [2];
// var a = [1, 2, 3, 4, 5];
// for (var i = 0; i < a.length; i++) {
//     if (v == a[i]) {
//         console.log('val is exist');
//     } else { console.log('val is not exist'); }
// }


// //perfect 1-100.........................

// for (var i = 1; i <= 100; i++) {
//     var s = 0;
//     for (var j = 1; j < i; j++) {
//         if (i % j == 0) {
//             s += j;
//         }
//     }
//     if (i == s) {
//         console.log(i);
//     }
// }

// // sum...................
// var g = 7, s = 0;
// for (let i = 1; i <= g; i++) {
//     s += i
// }
// console.log(s);

// //odd  1-30.....................

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 != 0) { console.log(i); }
// }

// //factorial....................
// var giv = 5, num = 1;
// for (var i = 1; i <= giv; i++) {
//     num *= i;
// }
// console.log(num);

// last occurs before fine prime......................


// for (i = 1; i <= 50; i++) {
//     for (j = 1; j < i; j++) {
//         if (i % j == 0) {
//             count++;
//             var res = i;
//         }
//     }
// }
// if (count == 2) { console.log(res + 'prime'); }

// //print..................

// var a = 25, b = 15, count = 0;
// for (i = 50, j = 1; i <= 0; i--, j++) {
//     if (i % j == 0) { count++; }
// }
// if (count == 2) { console.log(i); }

// //print the repited character...........................

// var a = ['today is ok'];
// var count = 0;
// for (i = 0; i <= a.length; i++) {
//     for (j = i; j < a.length; j++) {
//         if (a[i] == a[j]) { count++ }
//         console.log(a[i] + count);
//     }
// }

// //number1-10..............

// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// //sum 1-100.............

// var sum = 0;
// for (i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// //even 1-50.............

// for (i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// //odd 10 -30.....................

// for (i = 10; i <= 30; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

// //first 10.....................

// for (i = 1; i <= 10; i++) {
//     var a = i * i
//     console.log(a);
// }

// //3-30..........................
// for (i = 3; i <= 30; i++) {
//     i * 3;
//     console.log(i);
// }

// //factorial.................

// var fac = 1;
// for (i = 1; i <= 5; i++) {
//     fac * i;
//     console.log(fac);
// }

// //fibonacci sequence .......................

// var a = 1, b = 1; c = 0;
// for (i = 1; i <= 20; i++) {
//     c = a + b;
//     b = c;
//     a = b;
//     console.log(c);
// }

// //revers of given string........................

// var a = ['s', 'a', 'h', 'a', 'h', 'a', 'n', 'a'];
// for (i = a.length; i >= 0; i--) { console.log(a[i]); }

// //count..........................

// var a = ['s', 'a', 'h', 'a', 'h', 'a', 'n', 'a'];
// var count = 0;
// for (var i = 0; i < a.length; i++) {
//     if ('a' == a[i] || 'e' == a[i] || 'i' == a[i] || 'o' == a[i] || 'u' == a[i]) {
//         count++
//     }
// }
// console.log(count);

// //length of a string.........................

// var a = ['s', 'a', 'h', 'a', 'h', 'a', 'n', 'a'];
// console.log(a.length);

// //remove all duplicate.........................

// var a = ['s', 'a', 'h', 'a', 'h', 'a', 'n', 'a'];
// for (i = 0; i < a.length; i++) {
//     if (a[i] == a[i + 1]) {
//     } else {
//         console.log(console.log(a[i]));
//     }

// }

// //avarage........................

// var a = [1, 2, 3, 4, 5, 6];
// var sum = 0, count = 0;
// for (i = 0; i < a.length; i++) {
//     sum += a[i];
//     count++;
// }
// console.log('avarage' + sum / count);

// //- value.....................

// var a = [1, 2, 3, -1, -4, -5, 5]
// var count = 0;
// for (i = 0; i < a.length; i++) {
//     if (a[i] < 0) { count++ }
// }
// console.log('negative values ' + count);

// //2nd smallest element in array........................

// const a = [5, 2, 9, 1, 5, 6];
// let sm = a[0];

// for (let i = 1; i < a.length; i++) {
//     if (a[i] < sm) {
//         sm = a[i];
//     }
// }
// console.log("The smallest element is:", sm);

// //palindrome.............
// var giv = 121;
// var tem = 0;
// for (i = giv.length; i >= 0; i--) {
//     tem = giv[i];
// }
// if (giv == tem) {
//     console.log('palindrome' + tem);
// } else {
//     console.log('not a palindrome' + tem);
// }

// //fact.......................
// let num = [5, 3, 7, 2];
// let fac = [];
// for (i = 0; i < num.length; i++) {
//     let n = num[i];
//     let fa = 1;
//     for (let j = 1; j <= n; j++) {
//         fa *= j;
//     }
//     fac.push(fa);
// }
// console.log("Fac" + fac);

// //remove space............................

// let i = "hi this is lucifer";
// let str = i.split(" ").join("");
// console.log("remove space: " + str);

// //word........................................

// let a = "hi this is lucifer";
// let count = 0;
// for (let i = 0; i < alength; i++) {
//     if (a[i] !== ' ' && (i === 0 || a[i - 1] === ' ')) {
//         count++;
//     }
// }
// console.log("number of words" + count);

// // give a list.....................

// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// let tem = [];
// for (let i = 0; i < a.length; i++) {
//     let val = a[i];
//     if (b.includes(val)) {
//         tem.push(val);
//     }
// }
// console.log("Common elements: " + tem);

// //length of longest word...................

// let a = "hi this is lucifer";
// let b = a.split(" ");
// let l = 0;
// for (let i = 0; i < b.length; i++) {
//     if (b[i].length > l) {
//         l = b[i].length;
//     }
// }

// console.log(" max length" + l);

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// ..................................DOUBLE FOR LOOP................................................//


// //natural numbers........................

// for (let i = 1; i <= 10; i++) {
//     console.log('the natural numbers are' + i);
// }

// //natural numbers sum........................

// sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i
// }
// console.log('the sum of natural numbers are' + sum);

// //natural numbers sum of n th tearm........................
// n = 10;
// sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i
// }
// console.log('the sum of natural numbers are' + sum);

// //perfect number between 1-500........................

// for (i = 1; i <= 500; i++) {
//     let sum = 0;
//     for (j = 1; j <= i / 2; j++) {
//         if (i % j == 0) {
//             sum += j;
//         }
//     }
//     if (sum == i && i != 1) {
//         console.log(i);
//     }
// }

// //primr or not................................

// var a = 13, count = 0;
// for (i = 1; i <= a; i++) {
//     if (a % i == 0) {
//         count++
//     }
// }
// if (count == 2) { console.log('it is prime'); } else { console.log('not a prime'); }

// //prime in range in 1-100
// count = 0;
// for (i = 1; i < 100; i++) {
//     for (j = 1; j < i; j++) {
//         if (i % j == 0) { count++ }
//     }

//     if (count == 0) { console.log(i); }
// }
// if (count == 0) { console.log(i); }


// //fact for 5
// let fact = 1;
// for (i = 1; i <= 5; i++) {
//     fact *= i;
//     console.log(fact);
// }




// a = [{ abc: { d: [0, 1, 2, 3, { c: 'soundar' }] } }]

// //console.log(a[0]['abc']['d'][4]['c']);

// console.log(a[0].abc.d[4].c);


// a = [{ abc: { d: [0, 1, 2, 3, { c: 'soundar' }] } }]
// console.log(a[0]);
// for (i = 0; i < a.lehgth; i++)
//     console.log(a[1]);

// //gcd of 5...........................

// var f = 25, s = 15;
// for (i = 1; i < f; i++) {
//     if (f % i == 0 && s % i == 0) {
//         console.log('gcd' + i);
//     }
// }

// var n = 5, ans = 0, sum = 0;
// for (i = 1; i <= n; i++) {
//     sum = sum + i;
//     n--;
//     ans = ans + sum
//     console.log(ans);
// }

// 1 - 25 prime
// for (i = 1; i <= 25; i++) {
//     for (j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count++
//         }
//     }
// }
// if (count > 2) {

// }