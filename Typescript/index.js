// let a=1
// let a='abc'
// console.log(a);
// class mad {
//     constructor() {
//     }
//     s=2;
//     fbi() {
//         this.s+=1        
//         return this.s
//     }
// }
// let ob=new mad()
// console.log(ob.s);
// console.log(ob.fbi()
// class Test1 {
//      a!:number;  //!=>not null assertion, it is use to promise to excicutu
//         b:number=2
//         readonly c:number=3;
//     constructor() {
//         // this.a=1;
//         this.c=20;    }
// }
//  var o=new test1()
// console.log(o.a,o.b);
// o.a=5;
// o.b=10;
// console.log(o.a,o.b,o.c);
//get & set
// class Test2 {
//     val!:string;
//      get():string{
//         return this.val
//      }
//      set(a:string){
//         this.val=a;
//      }
//     constructor() {
//     }
// }
// var o=new Test2();
// o.val="10";
// console.log(o.val);
//with -get &set
// class Test3 {
//     _val:string="lucifer";
//     public get val() : string {
//         return this._val;
//     }
//     public set val(a: string) {
//         this._val = a;
//     }
//     constructor() {
//     }
// }
// var o=new Test3();
// console.log(o._val);
// o.val="10";
// console.log(o._val);
//string | number using get&set
// class Test3 {
//         _val:string|number="lucifer";
//         public get val() : string|number {
//             return this._val;
//         }
//         public set val(a: string|number) {
//             this._val = a;
//         }
//         constructor() {
//         }
//     }
//     var o=new Test3();
//     console.log(o._val);
//     o.val="10";
//     console.log(o._val);
