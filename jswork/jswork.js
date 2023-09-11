// s = [{ 'name': 'madara', 'age': 35 }, { 'name': 'hari', 'age': 23 }, { 'name': "valak", 'age': 30 }, { 'name': "negan", 'age': 40 }]
// s.forEach(e => console.log(e))


// VM156: 2 { name: 'madara', age: 35 }
// VM156: 2 { name: 'hari', age: 23 }
// VM156: 2 { name: 'valak', age: 30 }
// VM156: 2 { name: 'negan', age: 40 }
// undefined
// f = s.filter(e => e.age <= 40)
// console.log(f)


// VM360: 2(4)[{… }, {… }, {… }, {… }]0: { name: 'madara', age: 35 } 1: { name: 'hari', age: 23 } 2: { name: 'valak', age: 30 } 3: { name: 'negan', age: 40 } length: 4[[Prototype]]: Array(0)
// undefined
// d = [1, 2, 3, 4]
// sum = d.reduce((a, b) => a + b)
// console.log(sum)


// VM486: 3 10
// undefined
// news = s.map(e => { e.name = 'mr' + e.name }; { e.sal = e.age * 1000 })
// console.log(news)
// VM716: 1 Uncaught SyntaxError: missing ) after argument list
// news = s.map(e => { e.name = 'mr' + e.name; e.sal=> e.age * 1000; return e })
// console.log(news)
// VM787: 1 Uncaught SyntaxError: Malformed arrow function parameter list
// news = s.map(e => { 'mr' + e.name }, { e.sal = e.age * 1000; })
// console.log(news)
// VM814: 1 Uncaught SyntaxError: Unexpected token '.'
// news = s.map(e => { 'mr' + e.name }; { e.sal = e.age * 1000 })
// console.log(news)
// VM829: 1 Uncaught SyntaxError: missing ) after argument list
// news = s.map(e => { 'mr' + e.name, e.sal = e.age * 1000 })
// console.log(news)
// VM844: 2(4)[undefined, undefined, undefined, undefined]0: undefined1: undefined2: undefined3: undefinedlength: 4[[Prototype]]: Array(0)
// undefined
// console.log(s)
// VM889: 1(4)[{… }, {… }, {… }, {… }]0: { name: 'madara', age: 35, sal: 35000 } 1: { name: 'hari', age: 23, sal: 23000 } 2: { name: 'valak', age: 30, sal: 30000 } 3: { name: 'negan', age: 40, sal: 40000 } length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with () Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): { at: true, copyWithin: true, entries: true, fill: true, find: true, … } [[Prototype]]: Object
// undefined
// news = s.map(e => { e.name = 'mr' + e.name, e.sal = e.age * 1000 })
// console.log(news)
// VM920: 2(4)[undefined, undefined, undefined, undefined]
// undefined
// console.log(s)
// VM937: 1(4)[{… }, {… }, {… }, {… }]0: { name: 'mrmadara', age: 35, sal: 35000 } 1: { name: 'mrhari', age: 23, sal: 23000 } 2: { name: 'mrvalak', age: 30, sal: 30000 } 3: { name: 'mrnegan', age: 40, sal: 40000 } length: 4[[Prototype]]: Array(0)
// undefined
// s = [{ 'name': 'madara', 'age': 35 }, { 'name': 'hari', 'age': 23 }, { 'name': "valak", 'age': 30 }, { 'name': "negan", 'age': 40 }]
// ans = s.map(e => { a = {}, a.name = 'mr.' + e.name, a.age = e.age, a.sal = e.age * 1000,return a })
// console.log(ans)


// VM1201: 2 Uncaught SyntaxError: Unexpected token 'return'
// s = [{ 'name': 'madara', 'age': 35 }, { 'name': 'hari', 'age': 23 }, { 'name': "valak", 'age': 30 }, { 'name': "negan", 'age': 40 }]
// ans = s.map(e => { a = {}, a.name = 'mr.' + e.name, a.age = e.age, a.sal = e.age * 1000 })
// console.log(ans)


// VM1212: 3(4)[undefined, undefined, undefined, undefined]0: undefined1: undefined2: undefined3: undefinedlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with () Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): { at: true, copyWithin: true, entries: true, fill: true, find: true, … } [[Prototype]]: Object
// undefined
// console.log(ans)
// VM1272: 1(4)[undefined, undefined, undefined, undefined]0: undefined1: undefined2: undefined3: undefinedlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with () Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): { at: true, copyWithin: true, entries: true, fill: true, find: true, … } [[Prototype]]: Object
// undefined
// console.log(a)
// VM1283: 1 { name: 'mr.negan', age: 40, sal: 40000 } age: 40name: "mr.negan"sal: 40000[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// undefined
// console.log(ans[0])
// VM1304: 1 undefined
// undefined
// console.log(a[0])
// VM1313: 1 undefined
// undefined
// console.log(a)
// VM1325: 1 { name: 'mr.negan', age: 40, sal: 40000 }
// undefined

//........................................function................................

// //type one
// var a=[4,5,6,7,8,9]
// function fn(e){console.log(e);}
// a.forEach(fn)

// //type two

// var a = [1, 2, 4, 6, 8, 9, 0, 3]
// function fn(e) { return e }
// a.forEach(function (e) {
//     console.log(e);
// })

// //type 3...........arrow function

// var a=[3,4,5,7,1,9,4]
// function fn(e){return e}
// a.forEach((e)=>{console.log(e);})

// //type 4..................

// var a=[5,6,3,1,6,4]
// fn=function (e){console.log(e);}
// a.forEach(fn)

// //..........................................map...................

// //arrow function in map............

// a=[4,5,7,9,8,2,3]
// newa=a.map(e=>e*2)
// console.log(newa)

// //anonymous function in map..........

// a=[4,5,7,9,80,10,30]

// ans=a.map(function(s){
//     return s*2
// })
// console.log(ans);

// //...........with variable..................

// var a=[4,6,9,12,3,4,56,78]
// mymap=function(s){
//     return s*2
// }
// we=a.map(mymap)

// console.log(we);


//............................filter...........

// //type 1....by using only filter

// var a=[2,3,5,7,9,1,4,8]
// var b=a.filter(e=>e%2==0)
// console.log(b);

// //by using map............

// var a=[2,3,5,7,9,1,4,8]
// c=a.map(e=>{
//     if(e%2==0)
//     return e
// }
// )
// console.log(c);

//...........................readuce...............

// var a=[2,3,5,7,9,1,4,8]
// var sum=a.reduce((acc,val)=>{
//     console.log("acc-"+acc);
//     console.log("val-"+val);
//     return acc+val
// },5)
// console.log(sum);

//creating a object............

// user={'id':123,'name':'madara','age':30,'gender':'m','sal':1000}
// function myfun(e){
//     console.log(e.sal);
// }
// myfun(user)

// user={'id':123,'name':'madara','age':30,'gender':'m','sal':1000}
// function myfun({name}){
//     console.log(name);
// }
// myfun(user)


// emp=[
//     {'id':123,'name':'madara','age':30,'gender':'m','sal':1000},
//     {'id':234,'name':'hari','age':20,'gender':'m','sal':2000},
//     {'id':456,'name':'negan','age':40,'gender':'m','sal':4000},
//     {'id':567,'name':'king','age':50,'gender':'m','sal':5000},
//     {'id':789,'name':'valak','age':70,'gender':'m','sal':9000}
// ]

// ans=emp.reduce((a,b)=>a+b.sal,0)
// console.log(ans);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//map

// var a=[6,2,3,4]
//  var ans=a.map(e=>e**2)
//  console.log(ans);

// function capitalizeNames(objects) {
    
//     return objects.map((obj) => obj.name.toUpperCase());
//   }
//   const arrayOfObjects = [
//     { name: "john" },
//     { name: "mary" },
//     { name: "jane" }
//   ];
  
//   const capitalizedNames = capitalizeNames(arrayOfObjects);
//   console.log(capitalizedNames);

// var a=["madara"]

// newa=a.map(e=>e.toUpperCase());
// console.log(newa);

  