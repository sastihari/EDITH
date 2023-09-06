// // sum...................................
// let x = myFunction(4, 3);

// function myFunction(a, b) {
//   return a + b;
// }
// console.log(x);

// //factorial........................................

// function fa(n){
//   if (n === 0 || n === 1) {
//     return 1;
// } else {
//     return n *fa(n - 1);
// }
// }
// let y=fa(6)
// console.log(y);

// //odd or eve.................................
// function oe(e){
// if(e%2==0){
// return "even" 
// }else{
//   return "odd"
// }
// }
// let z=oe(7)
// console.log(z);

// //maximum...........................

// function max(m){
// for(i=0;i<=m;i++){
//   if(m[i]>max){
//     max=m[i]
//   }
// }  
// }
// var a=[1,2,3,4,10]
// let x=max(a)
// console.log(x);

// //palindrome.......................................

// function pal(a){
//   var last =a%10;
//   rev=rev*10+rem;
//   rem=a/=10;
//   return a;
// }
// rem=0;
// rev=1;
// let s=121;
// let z=pal(s)
// console.log(z);

// //reverse a List..................

// function rev(l){
//   return l.reverse();
// }
// var s=[1,2,3,4,5,]
// let z=rev(s)
// console.log(z);

// //area of a circle....................

// function cir(r) {
//   c=(3.14*(r**2))

//   return c
// }
// let s=10
// let z=cir(s)
// console.log(z);

// avarage......................

// function avg(a) {
//   for(i=1;i<=a;i++){
//     sum+=i
//     count++
//     return sum
//   }


// }
// let count=0,sum=0;
//   let s=[1,2,3,4,5,6]

// //prime.........................

// function pri(p){
//   for(i=1,count=0;i<=p;i++){
//     if(p%i==0){
//       count++;
//     }
//   }
//   console.log(count);
//   if(count==2){console.log('it is prime')}else {console.log('it is not a prime');}
// }
// var z=pri(7);

// //c to f

// function cel(c){
//   f=((c*(9/5))+32)
//   return f;
// }
// var z=cel(27)
// console.log(z+'f');

// //vowels in string.....................................

// function vow(s) {
//   count = 0
//   for (i = 0; i < s.length; i++) {
//     if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
//       count++
//     }

//   }
// }
// var a = 'madara'
// var z = vow(a)
// console.log(a +'has '+ count+' vowels');

// //cheking ascinding..........................

// function asc(a){
//   for(i=0;i<a.length;i++){
//     if(a[i]<a[i++]){
//       console.log('it is ascinding order');
//     }else{console.log('it is not in ascindung order');

//     }
//   }
// }
// var z=asc('12354');

// //power expopent.............................
// function pow(p,b){
//         a=Math.pow(p,b)
//         return a
// } 

// var z=pow(2,3)
// console.log(a);

// //smallest element.................

// function sma(a){
//   m=a[0];
//   for(i=0;i<a.length;i++){
//     if(m>a[i]){
//       m=a[i]
      
//     }
//   }
//   return m
// }
// var z=sma("23451")
// console.log(m);

// //fibonacci.......................

// function fib(n) {
//   let f = [0, 1];
// for (let i = 2; i < n; i++) {
//       let m= f[i - 1] + f[i - 2];
//       f.push(m);
//   }
// return f;
// }
// let count = 10;
// let fibonacciSeries = fib(count);
// console.log("Fibonacci sequence with " + count+ " terms:", fibonacciSeries);

// //unique element................

// function unique(r) {
// let a = [];
// for (let i = 0; i < r.length; i++) {
//         if (!a.includes(r[i])) {
//             a.push(r[i]);
//         }
//       }
// return a;
//   }
// let s= [1, 2, 2, 3, 4, 4, 5];
// let ans = unique(s);
// console.log("Unique elements:", ans);

// //triangle......................

// function trian(b, h) {
//   return 0.5 * b * h;
// }
// let b = 5;
// let h = 8;
// let a= trian(b, h);
// console.log("The area of the triangle is: " + a);

// //  volume of a sphare................

// function sph(r) {
// const pi = Math.PI;
// const e = (4/3) * pi * Math.pow(r, 3);
// return e;
// }
// let s = 5;
// let v = sph(s);
// console.log(r+ v);

// //sum.........................

// function d(n) {
//   let sum = 0;
//   let g = n.toString();
//   for (let i = 0; i < g.length; i++) {sum += parseInt(g[i]);}
//   return sum;
// }
// let m = 12345;
// let t = d(m);
// console.log(m+ t);

// //longest word...........

// function lon(w) {
//   if (w.length === 0) {
//       return null; 
//   }
// let l = w[0];
// for (let i = 1; i < w.length; i++) {
//       if (w[i].length > l.length) {
//           l = w[i];
//       }
//   }
// return l;
// }
// let s = ["athena", "negan", "hari", "madara"];
// let z= lon(s);
// console.log(z);

// //length and width for rectangle..................

// function rec(l, w) {
//   return l * w;
// }
// let z= rec(5, 8);
// console.log(z);

// //common element.........................

// function e(a, b) {
//   let c = [];
// for (let i = 0; i < a.length; i++) {
//       let e = a[i];
//       if (b===(e)) {c+=e;}
//     }
// return c;
// }
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6, 7];
// let z = e(a,b);
// console.log(z);

// //density

// function den(s) {return(s)}
// let i = "12345";
// console.log(i + den(i));
// i = "12a45";
// console.log( i  + den(i));

// //mul..................

// function mul(n, l) {
//   let sum = 0;
// for (let i = n; i < l; i += n) {sum += i;}
//   return sum;}
// let s = 3;
// let i = 10;
// let r= mul(s,i);
// console.log(r+mul+s+i);

// //length..............

// function len(s) {
//   for (let i = 1; i < s.length; i++) {
//       if (s[i].length < s[i - 1].length) {return false}
//       }
//   return true;
// }
// let a = ["aaa", "bbbb", "ccccc", "ddddd"];
// let z= ["ddddddd", "eeeeeeee", "ffffffffff", "ggggggggg"];
// console.log(len(a));
// console.log(len(z));

// //all even number...................

// function ave(n) {
//   let sum = 0;
//   let count = 0;
// for (let i = 0; i < n.length; i++) {
//       if (n[i] % 2 === 0) {
          
//           sum += n[i];
//           count++;
//         }
//   }
// if (count === 0) {return 0}
// return sum / count}
// let s = [2, 4, 6, 8, 10];
// let z = ave(s);
// console.log(z);

// //perameter................

// function pera(l, w) {return 2 * (l + w)}
// let l= 5;
// let w= 8;
// let z = pera(l, w);
// console.log(z);

//  A







