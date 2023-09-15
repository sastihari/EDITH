// now for proper way to typescript
//type annotation
// var a: number;
//type annotation setting the value
// var b: number = 2;
//type inference(number)
// var c = 3;
//type inference(number)
// var d = c + 100;
//type inference(string)
// var s = b + 'some string'
// var nottype:number=b+'some string';

// //union type
// let uni:number|string|boolean;
// uni=12
// uni="madara"
// uni=true
// console.log(uni);

// let arr1: number[]=[1,4,6,8,3]
// console.log(arr);let arr: number[]=[1,4,6,8,3] 
// let arr2:(number|string|boolean)[]=[1,'madara,true']
// console.log(arr2);

//like object
//type 1

// let aa:{ 
//     name:string;
// aage:number;
// }
// aa={
//     name:"lucifer"
//     aage:23
// }
// console.log(aa);
// console.log(aa.name);
// console.log(aa.aage);

//type2

// let aaa:{name:string; age:number}={name:'madara';age:22}
// console.log(aaa.name);
// let arrobj: { name: string; age: number }[] = [{ name: 'madara', age: 22 }, { name: 'lucifer', age: 32 }]
// console.log(arrobj);
// console.log(arrobj[1]);
// console.log(arrobj[0].age);
// var fil = arrobj.filter(e =>
//     if (e.age > 30) { 
//     console.log(e.name);
//     })


//
// let e:number;
// let b:number
// function add(e:number=2, b:number=5):number{
//     return e+b;
// }
// console.log(add(e,b));

// function ans(a:number,b:number,c?:number):number{
//     if(typeof c!=='undefined'){
//         return a*b*c
//     }
//     return a*b

// }
// console.log(ans(2,2,2));

//optional
// var arr=(a:number,b:number,c?:number):number=>{
//         if(typeof c!=='undefined'){
//             return a*b*c
//         }
//         return a*b
    
//     }
    
//     console.log(arr(2,2,2));

//default value

// function val(a:number=3,b:number=4,c:number=5):number{
            
//                 return a*b*c
            
            
        
//         }
        
//         console.log(val());


//dynamic no of par

function fbi(a:number,b:number,...rest:number[]):number{
    return a+b+rest.reduce((p,c)=>p+c,0);
}
console.log(fbi(2,5,7,8,9,2,3,1,5));



//annonymous

// var vrr=function(a:number,b:number,c:number):number{
            
//             return a*b*c
// }
        
    
        
//          console.log(vrr(2,2,2));



    










