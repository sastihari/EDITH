"use strict";
//..........................................TYPES......................................
Object.defineProperty(exports, "__esModule", { value: true });
//..........................................STRING......................................
var name1 = 'madara';
console.log(name1);
//..........................................NUMBER......................................
var id = 666;
console.log(id);
//..........................................BOOLEAN......................................
var kill = true;
console.log(kill);
//..........................................ANY......................................
//any...........we have to avoid to use it
var clan = 'uchiha';
console.log(clan);
//..........................................TUPLE......................................
//tuple..is a type look like  array=> [number,boolean,string]...=>if it goes more then  3 index we no need type
//note:no mater what but the arangement must be correct
//less then 3 index
var tup1 = [666, 'lucifer', true];
console.log(tup1);
// more then 3 index
var tup2;
tup2 = ['madara uchiha', false, 1];
console.log(tup2);
// We have no type safety in our tuple for indexes 3+
tup2.push(34, 56, 78, 21);
console.log(tup2);
//..........................................OBJECT......................................
var obj1 = {
    name: 'madara', age: 34, from: 'anime', kill_people: true
};
console.log(obj1);
//..........................................ARRAY Of OBJECT......................................
var obj = [{
        name: 'madara', age: 34, from: 'naruto', kill_people: true
    }, {
        name: 'LUCIFER', age: 0, from: 'HELL', kill_people: true
    }, {
        name: 'Negan', age: 30, from: 'walking dead', kill_people: true
    }];
console.log(obj[0].name);
console.log(obj[1]);
console.log(obj[2].name, obj[2].from, obj[2].kill_people);
//..........................................ENUM......................................
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//for string
var news;
(function (news) {
    news["north"] = "NORTH";
    news["east"] = "EAST";
    news["west"] = "West";
    news["south"] = "South";
})(news || (news = {}));
console.log(news.east);
console.log(news.north);
//for number
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.BadRequest);
console.log(StatusCodes.Accepted);
//for index point
//type-1......default it take index as 0
(function (news) {
    news[news["north1"] = 0] = "north1";
    news[news["east1"] = 1] = "east1";
    news[news["west1"] = 2] = "west1";
    news[news["south1"] = 3] = "south1";
})(news || (news = {}));
var ans1 = news.west1;
console.log(ans1);
//type-2.....
(function (news) {
    news[news["north2"] = 3] = "north2";
    news[news["east2"] = 4] = "east2";
    news[news["west2"] = 5] = "west2";
    news[news["south2"] = 6] = "south2";
})(news || (news = {}));
var ans2 = news.west2;
console.log(ans2);
var poco_model = "poco-x5 pro";
var poco_price = 21000;
var poco_RAM = "8GB-RAM";
var poco_camera = "108-MP";
var poco1 = {
    model: poco_model,
    price: poco_price,
    RAM: poco_RAM,
    camera: poco_camera
};
console.log(poco1);
var poco = {
    model: 'poco-x5 pro',
    price: 21000,
    RAM: '8GB-RAM',
    camera: '108MP'
};
var oppo = {
    model: 'oppo-Reno 7 pro',
    price: 30000,
    RAM: '6GB-RAM',
    camera: '64MP'
};
var iphone = {
    model: 'iphone 14-pro max',
    price: 130000,
    RAM: '6GB-RAM',
    camera: '64MP'
};
console.log(poco);
console.log(poco.model);
console.log(oppo.RAM);
console.log(oppo);
console.log(iphone.price);
console.log(iphone);
