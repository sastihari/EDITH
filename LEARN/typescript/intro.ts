//..........................................TYPES......................................

//..........................................STRING......................................
var name1: string = 'madara'
console.log(name1);

//..........................................NUMBER......................................
var id: number = 666
console.log(id);

//..........................................BOOLEAN......................................
var kill: boolean = true
console.log(kill);
//..........................................ANY......................................

//any...........we have to avoid to use it
var clan: any = 'uchiha'
console.log(clan);

//..........................................TUPLE......................................
//tuple..is a type look like  array=> [number,boolean,string]...=>if it goes more then  3 index we no need type
//note:no mater what but the arangement must be correct


//less then 3 index

var tup1: [number, string, boolean] = [666, 'lucifer', true]
console.log(tup1);

// more then 3 index

var tup2: [string, boolean, number]
tup2 = ['madara uchiha', false, 1]
console.log(tup2);
// We have no type safety in our tuple for indexes 3+
tup2.push(34, 56, 78, 21)
console.log(tup2);

//..........................................OBJECT......................................

var obj1: { name: string, age: number, from: string, kill_people: boolean } = {
    name: 'madara', age: 34, from: 'anime', kill_people: true
}
console.log(obj1);


//..........................................ARRAY Of OBJECT......................................
var obj: { name: string, age: number, from: string, kill_people: boolean }[] = [{
    name: 'madara', age: 34, from: 'naruto', kill_people: true
}, {
    name: 'LUCIFER', age: 0, from: 'HELL', kill_people: true
}, {
    name: 'Negan', age: 30, from: 'walking dead', kill_people: true
}]
console.log(obj[0].name);
console.log(obj[1]);
console.log(obj[2].name,obj[2].from,obj[2].kill_people);

//..........................................ENUM......................................

//An enum is a special "class" that represents a group of constants (unchangeable variables).

//for string
enum news{
    north='NORTH',east='EAST',west='West',south='South'
}
console.log(news.east);
console.log(news.north);

//for number
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.BadRequest);
  console.log(StatusCodes.Accepted);
//for index point

//type-1......default it take index as 0
enum news{
    north1,east1,west1,south1}
    var ans1=news.west1
console.log(ans1);

//type-2.....
enum news{
    north2=3,east2,west2,south2}
    var ans2=news.west2
console.log(ans2);
//................................Type Aliases.........................

//1.Type Aliases allow defining types with a custom name (an Alias)

//2.Type Aliases can be used for primitives like string or more complex types such as objects and arrays

type m=string
type p=number
type r=string
type c=string

type mobile={
    model:m,
    price:p,
    RAM:r,
    camera:c
};

const poco_model:m="poco-x5 pro"
const poco_price:p=21000
const poco_RAM:r="8GB-RAM"
const poco_camera="108-MP"

const poco:mobile={
    model:poco_model,
    price:poco_price,
    RAM:poco_RAM,
    camera:poco_camera
};
console.log(poco);

//...............................INTERFACE...................

//Interfaces are similar to type aliases, except they only apply to object types.

//it can,t have value & we can use interface with multiple objects 
interface Mobile {
    model: string;
    price: number;
    RAM: string;
    camera: string;
}

const poco: Mobile = {
    model: 'poco-x5 pro',
    price: 21000,
    RAM: '8GB-RAM',
    camera: '108MP'
};

const oppo:Mobile={
    model: 'oppo-Reno 7 pro',
    price: 30000,
    RAM: '6GB-RAM',
    camera: '64MP'
};

const iphone:Mobile={
    model: 'iphone 14-pro max',
    price: 130000,
    RAM: '6GB-RAM',
    camera: '64MP'
}
console.log(poco);
console.log(poco.model);

console.log(oppo.RAM);
console.log(oppo);

console.log(iphone.price);
console.log(iphone);







  
export{} //it is use to avoid the error in variable name

