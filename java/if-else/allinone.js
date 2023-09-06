//leap year...............

    let s=2024;
    if(((s % 4 == 0) && (s % 100!= 0)) || (s%400 == 0)){
        console.log('leap year');
    }else{
        console.log('not a leap year');
    }

//odd_even................

        let s=2;
        if(s%2==0){
         console.log('EVEN');
        } else{
         console.log('ODD');
        }

//greater r lesser..............................

        let a=5,b=10;
        if(a<b){
            console.log(b+'is GREATER');
        }else{
        console.log(a+'is GREATER');
         }
        
//greater amoung three........................

     let s=5,a=10,h=15;
     if (s>a && s>h) {
     console.log(s);
     }else if(a>h && a>s){
     console.log(a);
     }else if(h>s && h>a){
     console.log(h);}
    

//pass if with in 60%..................
    
    let i=70
    if(i>60)
       console.log('pass');
    else console.log('fail');

//prime & composite................
    let s=3
    if(s%1==0 && s%S==0){console.log('prime');}else{console.log('composite');}
    
//assinding order...................

    let s=20,a=5,h=10;
    if (s<a && s<h) {
        if(a<h){
            console.log(s,a,h);
        }
    }else if(a<h && a<s){
        if(h<s){
            console.log(a,h,s);
        }
    }else if (h<s && h<a){
        if(s<a){
            console.log(h,s,a);
        }
    }

//vowels and consonants................

let c='s';
if(c=='a' || c=='e' || c=='i' || c=='o'|| c=='u'){
    console.log('vowles');
}else{
    console.log('consonants');
}

//alpha , dig,spl-char....................

let c='$';
if((c>='a' && c<='z') || (c>='A' && c<='Z')){
    console.log('it is alpha');
}else if(c>='0' && c<='9'){
        console.log('it is dig');
}else{
    console.log('spl-char');
}
    
//print week day.................

let n=3;
if(n==1){ console.log('sun');}else if(n==2){ console.log('mon');}
else if(n==3){ console.log('tue');}else if(n==4){ console.log('wed');}
else if(n==5){ console.log('thu');}else if(n==6){ console.log('fri');}
else if(n==7){ console.log('sat');}else if(n>8){ console.log('no day check it properly');}

//add,sub,mul,div.................

let c=10,b=20,a='add',s='sub',d='div',m='mul';
if('add'==a){console.log(c+b);}
if('sub'==s){console.log(c-b);} 
if('div'==d){console.log(c/d);}
if('mul'==m){console.log(c*d);}

//age..................

let age=23;
if(age<18){console.log('child');}else if(age>18 && age <=65){console.log('adult');}
else{console.log('senior');}

//weight.........................

let w=20;
if(w<18.5){console.log('under weight ');}else if(w>18.5 && w<=24.9){console.log('adult');}
else if(w>25 && w<=29.9){console.log('over weight');}else{console.log('obses');}

//BMI....................

let w=20 ,h=1;
let bmi=(((w/h)*2)*703);
if(bmi<18.5){console.log('under weight');}else if(bmi>18.5 && bmi<=24.9)
{console.log('normal weight');}else if (bmi>25  && bmi<=29.9)
{console.log('oveer weight');}else{console.log('obses');}

//fever......................

let f=35;
if(f<37.5){console.log('not a fever');}else if(f>37.5){console.log('its a fever');}

//blood pressure.........................

const [s,d]=[90,60];
if(s<=120 && d<=80){console.log('normal');}else if(s>=120 && s<=129 && d){console.log('elevated');
}else if(s>=130 && s<=139 && d<=80) { console.log('stage one hypertension');}
else{console.log('stage two hypertension');}

//tax bracket......................

let tax =10000;
if(tax<500000){console.log('no tax');}else if(tax>50000 && tax<1000000){
    console.log('low tax bracket');}else{console.log('high tax bracket');}

//RSG-retirement................................

const[a,r]=[23,10000];
if(a<65 && a>=18 && r<132000){console.log('low retirement saving');}
else if(a<65 && a>=18 && r==132000 && r<132000){console.log('middle income thresholder');}
else if(a>65 && a>=18 && r>132000){console.log('high income thresholder');}
else{console.log('no retirement saving');}

//GPA.........................

let g=1.0;
if(g<2.0){console.log('acadamic probation');}else{console.log('good standing');}

//credit score........................... 

let c=666;
if(c<600){console.log('poor credit');}else if(c>=600 && c<=699){
console.log('fatir credit');}else if(c>=700 && c<=799){
console.log('good credit');}else if(c>=800){console.log('excellent credit');}

//age & working experience..........................

const[a,w]=[23,2];
if(a<=25 && w>1){console.log('entery level');}else if(a>=25 && a<=40 && w>=1 && w<=5){console.log('junior');
}else if(a>40 && w>=5 && w<=10){console.log('senoir');
}else if(a>40 && w>10){console.log('expert');}

//negative & positive & zero.....................

let a=1;
if(a<0){console.log('negative');}else if(a==0){console.log('zero');
}else{console.log('positive');}

//div by 5 & 11...............................

let a=10;
if(a%5==0 && a%11==0){console.log('divisible');}else{console.log('not a divisible');}

//upper case r lower case..........................

let c='A';
if(c>='a' && c<='z'){console.log('lower case');}else{console.log('upper case');}

//month and month in day...............................

let n=10;
if(n==2){console.log('28days');}else if(n==4 || n==6 || n==9 || n==11 || n==12){console.log('30days');
}else{console.log('31days');}

//triangle.....................

const[x,y,z]=[60,60,90];

if(((x+y)>z) && ((y+z)>x) && ((z+x)>y)){console.log('it a triangle');}else{console.log('not a triangle');}

//equal triangle r isoscale r scalen.....................

const[x,y,z]=[6,1,6];
if(x==y && y==z && z==x){console.log('it is a equal triangle');
}else if((x==y && x==z)||(y==z && y==x) || (z==x && z==y)){console.log('it is iso scale');
}else{console.log('scalene');}

//calculate profite r loss....................

const[p,s]=[10,100];
if(s>p){console.log('profite');}else{console.log('loss');}

//percentage.....................

let phy=60,che=67,bio=90,mat=100,comp=90;
let total=phy+che+bio+mat+comp;
let p=((total/500)*100);
if(p>=90){console.log('Grade A');}else if(p>=80){
console.log('Grade B');}else if(p>=70){
console.log('Grade C');}else if(p>=60){
console.log('Grade D');}else if(p>=40){
console.log('Grade E');}else if(p<40){
console.log('Grade F');}

//Gross Salary...............

let sal=20000;
if(sal<=10000){ let gs=(sal+(sal*0.2)+(sal*0.8));
console.log(gs);}else if(sal<=20000){let gs=(sal+(sal*2.5)+(sal*0.9));console.log(gs);
}else if(sal>20000){let gs=(sal+(sal*3)+(sal*9.5));console.log(gs);
}

//unit....................
let u=40;
let amt;
if(u<=50){ amt=u*0.50}else if(u<=150){ amt=25+((u-50)*0.75)
}else if(u<=250){ amt =100+((u-150)*1.20)
}else{ amt=220+((u-250)*1.50)}
let charge=amt*0.20;
let total =amt+charge;
console.log(total);

//n & p................

let n=6;
if(n<0){console.log('negative');}else{console.log('positive');}


//max..........................

let a=10,b=60;
if(a>b){console.log(a+' is max');}else{console.log(b+' is max');}

//vote......................

let age=23;
if(age>=18){console.log('elligable');}else{console.log('not ellligable');}

//prime...........................

let num =5;
if(num%1==0 && num%num){console.log('it is prime');}else{console.log('not a prime');}

//student score..............

let s=98;
if(s>=50){ console.log('pass');}else{console.log('fail');}

//c-f.....................

let c=30;
if(c==c){console.log(((9/5)*c+32);}