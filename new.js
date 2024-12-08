// -----------------------------------ISSSUE 1-------------------------------------------//

let title = "Shokhzoda";
// console.log(title.length +''+ 'salom')
let num = "12345654389";
let start = title.slice(4, 7);
//  console.log(start)
let end = num.slice(-2);
// console.log(end)
let res = start + "*****" + end;
// console.log(res)

//  ---------------------------------------ISSUE 2---------------------------------------//
//  console.log(Math.ceil(Math.random()*10));
//  Math.min(100,20,50,-3,70,-100)
//  console.log(
//     Math.min(100,20,50,-3,70,-100))
//     console.log(
//        Math.max(12000,20,50,-3,70,-100))
//     console.log(Math.ceil(Math.sqrt(96)))

// ========================================ISSUE 3=========================================//
let son = 20;
//    console.log(son.toString())
let sona = 20.9856325;
//   console.log(sona.toFixed(2))
let r = "2";
//  console.log(+r)
//       console.log(--r)
let d = new Date();
//   console.log(d.toUTCString())
let cars = ["Saab", "Volvo", "BMW"];
//   console.log(cars[1])
let car = (cars[0] = "malibu");
//  console.log(cars.toString())

//      let yoga = 'Salom,Hayr,boldi';
//      console.log(yoga.split())
//      let ar = ['tog','daraxt','tosh',12,5]
//      console.log(ar.join())
//     console.log(ar.push(5))
//     let x=7
//     x--
//      let y=1
//     let z=x
//     console.log(!(x>y))
//     console.log(x=1)
//      console.log(z)


    // let married = 'widowe'
    // if(married === 'yes'){
    //              console.log('you will accept')

    // }
    //  else if(married=='widowed'){
    //      console.log('not accepted')

    // }
    //  else if(married ='engaged'){
    //     console.log('you can apply after wedding')
    //  }
    //  else{console.log('Invalid answer');
    //  }

//      let abroad = 'ha'
//      let abroad1 = 0
//      switch(abroad){
//      case 'yes':
//     case 'ha': {
//        console.log(abroad1 = 'you do not accepted')
//        break;    }
//      case 'no':{
//         console.log(abroad1 = 'you can go')
//     }
//      default:{
//          console.log('wrong answer')    }
//  }

// let d=21/6
// console.log(d.toFixed(5))

// console.log(12+ +'12k')

// num = 23654123965874125n
// console.log(num * 2n/5n)

// let sonlar= [12,3,56,89,1,0,45]

// console.log((Math.min(...sonlar)))
// console.log((Math.min(12,5,6,3)))
// console.log((Math.min(+sonlar)))

// let g = -25.612563
// console.log(Math.abs(g))

// let grendeur = true {
// console.log(grendeur? 'Sotib olaman' : 'Boshqasini olishni oylab koraman' )

// let f = '123654'
// console.log(Number(f.length))

// let a='12345679'
// console.log(a.slice(-3))
// }
// let e = 'erimni'
// let e1='sevaman'
// console.log(e.concat(' ',e1))

// let xz = 256;
// let xs = 253;
// console.log(xz+xs)

// obj ={
//     name:'Shokhzoda',
//     surname: 'Panjizoda',
//     age: 35
// }

// console.log( obj.name +' '+ obj.surname+' '+ 'is' +' '+ obj.age + ' '+ 'years old')

// let web = ['Shukurov', 'Sobir','is',39,'years old']
// console.log(web[2])
// console.log(...web)
// console.log(web.pop('LOVE'))
// console.log(web.push('LOVE'))
//  ======================================ISSUE 4==========================================//

let fnc1 = (a) => {
  if (a > 10) {
    b = a + 3;
    return b;
  } else if (a < 10) {
    b = a * 2;
    return b;
  } else {
    return 22;
  }
};

// console.log(fnc1(10));

//  ======================================ISSUE 5==========================================//

let func2 = (a) => {
  let b = a / 3;
  return Math.floor(b);
};
// console.log(func2(16))

//  ======================================ISSUE 6==========================================//

let fnc3 = (a) => {
  b = a % 3;
  return b;
};
// console.log(fnc3(7))

//  ======================================ISSUE 7==========================================//

let fnc4 = (a) => {
  if (a % 2 === 0) {
    return "juft";
  } else {
    return "toq";
  }
};
// console.log(fnc3(7))

//  ======================================ISSUE 8==========================================//

let func5 = (a, b) => {
  if (a < b) {
    return b;
  } else if ((a = b)) {
    return "Voy ular teng";
  }
};
// console.log(func5(4,4))

//  ======================================ISSUE 9==========================================//

let func6 = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return "katta son b=7";
  } else {
    return c;
  }
};
// console.log(func6(4,7,5))

//  ======================================ISSUE 10==========================================//

let func7 = (a) => {
  if (a > 0) {
    return "musbat";
  } else if (a < 0) {
    return "manfiy";
  } else {
    return 0;
  }
};

// console.log(func7(0))

//  ======================================ISSUE 11==========================================//

let func8 = (a) => {
  if (a % 5 === 0) {
    return "true";
  } else if (a % 5 !== 0) {
    return "false";
  }
};

// console.log(func8(15))

//  ======================================ISSUE 12==========================================//

let func9 = (a) => {
  if (a % 3 === 0 || a % 4 === 0) {
    return "true";
  } else {
    return "false";
  }
};

// console.log(func9(14))

//  ======================================ISSUE 13==========================================//

let func10 = (a) => {
  if (a % 4 === 0 || a % 400 === 0) {
    return "true";
  } else if (a % 100 !== 0) {
    return "false";
  }
};

// console.log(func10(2000))

//  ======================================ISSUE 14==========================================//

let func11 = (c) => {
  if (Number(c)) {
    return "son";
  } else if (isNaN(c)) {
    return "alpha";
  }
};
// console.log(func11(23))

//  ======================================ISSUE 15==========================================//

let func12 = (c) => {
  if (c >= "A" && c >= "Z") {
    return "upperCase";
  } else if (c >= "a" && c >= "z") {
    return "lowerCase";
  } else {
    return "nono";
  }
};
// console.log(func12(2))

//  ======================================ISSUE 16==========================================//

let func13 = (a) => {
  if (a === 1) {
    return "Dushanba";
  } else if (a === 2) {
    return "Seshanba";
  } else if (a === 3) {
    return "Chorshanba";
  } else if (a === 4) {
    return "Payshanba";
  } else if (a === 4) {
    return "Juma";
  } else if (a === 6) {
    return "Shanba";
  } else if (a === 7) {
    return "Yakshanba";
  } else {
    return none;
  }
};
// console.log(func13(6))

//  ======================================ISSUE 17==========================================//

let func14 = (a, b, c) => {
  if (a + b + c === 180 ) {
    return "true";
  } else if(a,b,c<=0) {
    return "false";
  }
};
// console.log(func14(20, 10, 150));

//  ======================================ISSUE 18==========================================//

let func15=(a,b,c)=>{
    if(a<b+c && b<a+c && c<b+a){
        return 'true'
    }
    else{
        return 'false'
    }
}
// console.log(func15(5,1,2))

//  ======================================ISSUE 19==========================================//

let func16=(a,b,c)=>{
    if(a===b && b===c && a===c){
        return 'equilateral'
    }
    else if(c===b || a===c || a===b){
        return 'isosceles'
    }
    else if(a!==c && b!==c && a!==b ){
        return 'scalene'
    }
}
// console.log(func16(10,10,10))

//  ======================================ISSUE 20==========================================//

let func17 =(a,b,c)=>{
    let x=0
    if(a>0) x++
    if(b>0)x++
    if(c>0)x++
    
     return x
    
}
// console.log(func17(1,-8,-27))

//  ======================================ISSUE 21==========================================//

let func18=(a,b)=>{
    if(a>b){
        return a
    }
    else if(a===b){
        return 'Sonlar teng'
    }
    else{
        return b
    }

}
// console.log(func18(3,3))

//  ======================================ISSUE 22==========================================//

let func19=(a,b,c)=>{
    let x=0
    if(x=(a+b+c)/3){
        return x
    }
}
// console.log(func19(3,10,8))

//  ======================================ISSUE 23==========================================//

let func20=(a,b,c)=>{
    if(a<b && b<c){
        return 1
    }
    else if(a<b && b>c){
        return b
    }
    else if(a===b && b===c){
        return 5
    }
    else{
        return 0
    }
}
// console.log(func20(6,8,9)) masala xato berilgan: Sonlarni taqqoslang

//  ======================================ISSUE 24==========================================//

let func21=(a,b,c)=>{
    if(a===c){
        return b
    }
    else if(b===c){
        return a
    }
    else if(a===b){
        return c
    }
    else{
        return 0
    }
}
// console.log(func21(6,5,11))

//  ======================================ISSUE 25==========================================//

let func22 =(a,b)=>{
    let c=0
    if(c=a-b || c===b-a){
        return Math.abs(c)
    }
}
// console.log(func22(-2,6))

//  ======================================ISSUE 26==========================================//

let func23=(a)=>{
    if(a<0){
        return a*(-1) 
    }
    else{
        return a
    }
}
// console.log(func23(-15))

//  ======================================ISSUE 27==========================================//
let func27=(a)=>{
    if(a<10){
        return 1 
    }
    else if(a<100){
        return 2
    }
    else if(a<999){
        return 3
    }
    else{
        return "bunday qiymat bizda yo'q"
    }
}
// console.log(func27(1000))

//  ======================================ISSUE 28==========================================//


let func28=(a,b,c,d)=>{
    if(a>=0 && b>=0 && c>=0 && d>=0){
        return 'true '
    }
       else{
        return 'false'
    }
}
// console.log(func28(2,3,-5,8))

//  ======================================ISSUE 29==========================================//

let func29=(a,b,c,)=>{
    if(a%2!==0 && b%2!==0 && c%2!==0){
        return 1
    }
       else if(a%2===0 || b%2!==0 || c%2!==0) {
        return 3
    }
    else if(a%2===0 && b%2===0 && c%2===0){
return 2
    }
    else {
        return 0
    }
}
// console.log(func29('a',4,6))


//  ======================================ISSUE 30==========================================//

let func30=(a,b,c,)=>{
    if(a%2===0 && b%2===0 || c%2===0 ){
        return 1
    }
       else if(a%2!==0 && b%2!==0 || c%2!==0) {
        return 2
    }
       else if(
        String(a) && String(b) || String(c)
    ){
        return 0
    }
}
console.log(func30('l','l','l'))

//  ======================================ISSUE 31==========================================//

let func31=(a,b,c,)=>{
    let d=0
    
     if(a<=0 || b<=0 || c<=0){
        return 0
    }
    else if(d=String(a)+String(b)+String(c)){
        return Number(d)
        // return d
    }
}
// console.log(func31(5,2,2))





