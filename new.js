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
const func2 = (a) => {
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
const func5 = (a, b) => {
  if (a < b) {
    return b;
  } else if ((a = b)) {
    return "Voy ular teng";
  }
};
// console.log(func5(4,4))

//  ======================================ISSUE 9==========================================//
const func6 = (a, b, c) => {
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
const func7 = (a) => {
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
const func8 = (a) => {
  if (a % 5 === 0) {
    return "true";
  } else if (a % 5 !== 0) {
    return "false";
  }
};

// console.log(func8(15))

//  ======================================ISSUE 12==========================================//
const func9 = (a) => {
  if (a % 3 === 0 || a % 4 === 0) {
    return "true";
  } else {
    return "false";
  }
};

// console.log(func9(14))

//  ======================================ISSUE 13==========================================//
const func10 = (a) => {
  if (a % 4 === 0 || a % 400 === 0) {
    return "true";
  } else if (a % 100 !== 0) {
    return "false";
  }
};

// console.log(func10(2000))

//  ======================================ISSUE 14==========================================//
const func11 = (c) => {
  if (Number(c)) {
    return "son";
  } else if (isNaN(c)) {
    return "alpha";
  }
};
// console.log(func11(23))

//  ======================================ISSUE 15==========================================//
const func12 = (c) => {
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
const func13 = (a) => {
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
const func14 = (a, b, c) => {
  if (a + b + c === 180) {
    return "true";
  } else if ((a, b, c <= 0)) {
    return "false";
  }
};
// console.log(func14(20, 10, 150));

//  ======================================ISSUE 18==========================================//
const func15 = (a, b, c) => {
  if (a < b + c && b < a + c && c < b + a) {
    return "true";
  } else {
    return "false";
  }
};
// console.log(func15(5,1,2))

//  ======================================ISSUE 19==========================================//
const func16 = (a, b, c) => {
  if (a === b && b === c && a === c) {
    return "equilateral";
  } else if (c === b || a === c || a === b) {
    return "isosceles";
  } else if (a !== c && b !== c && a !== b) {
    return "scalene";
  }
};
// console.log(func16(10,10,10))

//  ======================================ISSUE 20==========================================//
const func17 = (a, b, c) => {
  let x = 0;
  if (a > 0) x++;
  if (b > 0) x++;
  if (c > 0) x++;

  return x;
};
// console.log(func17(1,-8,-27))

//  ======================================ISSUE 21==========================================//
const func18 = (a, b) => {
  if (a > b) {
    return a;
  } else if (a === b) {
    return "Sonlar teng";
  } else {
    return b;
  }
};
// console.log(func18(3,3))

//  ======================================ISSUE 22==========================================//
const func19 = (a, b, c) => {
  let x = 0;
  if ((x = (a + b + c) / 3)) {
    return x;
  }
};
// console.log(func19(3,10,8))

//  ======================================ISSUE 23==========================================//
const func20 = (a, b, c) => {
  if (a < b && b < c) {
    return 1;
  } else if (a < b && b > c) {
    return b;
  } else if (a === b && b === c) {
    return 5;
  } else {
    return 0;
  }
};
// console.log(func20(6,8,9)) masala xato berilgan: Sonlarni taqqoslang

//  ======================================ISSUE 24==========================================//
const func21 = (a, b, c) => {
  if (a === c) {
    return b;
  } else if (b === c) {
    return a;
  } else if (a === b) {
    return c;
  } else {
    return 0;
  }
};
// console.log(func21(6,5,11))

//  ======================================ISSUE 25==========================================//
const func22 = (a, b) => {
  let c = 0;
  if ((c = a - b || c === b - a)) {
    return Math.abs(c);
  }
};
// console.log(func22(-2,6))

//  ======================================ISSUE 26==========================================//
const func23 = (a) => {
  if (a < 0) {
    return a * -1;
  } else {
    return a;
  }
};
// console.log(func23(-15))

//  ======================================ISSUE 27==========================================//const func27 = (a) => {
const func27 = (a) => {
  if (a < 10) {
    return 1;
  } else if (a < 100) {
    return 2;
  } else if (a < 999) {
    return 3;
  } else {
    return "bunday qiymat bizda yo'q";
  }
};

// console.log(func27(1000))

//  ======================================ISSUE 28==========================================//
const func28 = (a, b, c, d) => {
  if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
    return "true ";
  } else {
    return "false";
  }
};
// console.log(func28(2,3,-5,8))

//  ======================================ISSUE 29==========================================//
const func29 = (a, b, c) => {
  if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
    return 1;
  } else if (a % 2 === 0 || b % 2 !== 0 || c % 2 !== 0) {
    return 3;
  } else if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    return 2;
  } else {
    return 0;
  }
};
// console.log(func29('a',4,6))

//  ======================================ISSUE 30==========================================//
const func30 = (a, b, c) => {
  if (
    (a % 2 === 0 && b % 2 === 0) ||
    (a % 2 === 0 && c % 2 === 0) ||
    (c % 2 === 0 && b % 2 === 0)
  ) {
    return 1;
  } else if (
    (a % 2 === 1 && b % 2 === 1) ||
    (a % 2 === 1 && c % 2 === 1) ||
    (c % 2 === 1 && b % 2 === 1)
  ) {
    return 2;
  } else {
    return 0;
  }
};
// console.log(func30(2,3,'l'))

//  ======================================ISSUE 31==========================================//
const func31 = (a, b, c) => {
  let d = 0;

  if (a <= 0 || b <= 0 || c <= 0) {
    return 0;
  } else if ((d = String(a) + String(b) + String(c))) {
    return Number(d);
    // return d
  }
};
// console.log(func31(5,2,2))

//  ======================================ISSUE 32==========================================//
const func32 = (a) => {
  let x = 0;
  for (i = 0; i <= a; i++) {
    x += i;
  }

  return x;
};
// // console.log(func32(7))
// for

//  ======================================ISSUE 33==========================================//
const func33 = (a) => {
  let x = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 2 === 0) {
      x += i;
    }
  }

  return x;
};
// console.log(func33(7))
// console.log(func33(10))

//  ======================================ISSUE 34==========================================//
const func34 = (a) => {
  let x = 0;
  for (let i = 0; i <= a; i++) {
    if (i % 2 !== 0) {
      x += i;
    }
  }
  console.log(x);

  return "tugadi";
};
// console.log(func34(10))

//  ======================================ISSUE 35==========================================//
const func35 = (a, b) => {
  let x = 0;
  for (let i = a; i < b; i++) {
    if (i % 2 === 0) {
      x++;
    }
  }
  return x;
};
// console.log(func35(24,31))

//  ======================================ISSUE 36==========================================//
const func36 = (a, b) => {
  let x = 0;
  for (let i = a; i < b; i++) {
    x += i;
  }
  console.log(x);

  return "tugadi";
};
// console.log(func36(2,8))

//  ======================================ISSUE 37==========================================//
const func37 = (a, b) => {
  let x = 0;
  let y = 0;
  for (let i = a; i < b; i++) {
    if (i % 3 === 0) {
      x += i;
      y++;
    }
  }

  return [x, y];
};
// console.log(func37(4, 15));

//  ======================================ISSUE 38==========================================//

const func38 = (a, b) => {
  let x = 0;
  //   let y = 0;
  for (i = a; i < b; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      x++;
      //   y++;
    }
  }
  return { x };
};
// console.log(func38(2, 21));

//  ======================================ISSUE 39==========================================//

const func39 = (a, b) => {
  let x = 0;
  for (i = a; i <= b; i++) {
    if (i > 0) {
      x++;
    }
  }
  return x;
};
// console.log(func39(-1,10))

//  ======================================ISSUE 40==========================================//

const func40 = (a) => {
  let x = 1;
  for (i = 1; i <= 5; i++) {
    x *= a;
  }
  return x;
};
// console.log(func40(2))

//  ======================================ISSUE 41==========================================//

const func41 = (a, n) => {
  let x = 1;
  for (i = 1; i <= a; i++) {
    x *= i ** n;
  }
  return x;
};
// console.log(func41(2,6))

//  ======================================ISSUE 42==========================================//

const func42 = (a, n) => {
  let x = 0;
  let y = 0;
  for (i = 1; i <= n; i++) {
    x = x * 10 + a;
    y += x;
  }
  return y;
};
// console.log(func42(3,4))

//  ======================================ISSUE 43==========================================//

const func43 = (a) => {
  let y = 0;
  for (i = 1; i < a; i++) {
    if (a % i === 0) {
      y += i;
    }
  }
  return y === a ? "true" : "false";
};
// console.log(func43(6))

//  ======================================ISSUE 44==========================================//

const func44 = (n) => {
  let x = 0;
  for (i = 1; i <= n; i++) {
    x += i * i;
  }
  return x;
};
// console.log(func44(7))

//  ======================================ISSUE 45==========================================//

const func45 = (n) => {
  let x = 0;
  let y = n.toString().split("");
  for (i = 0; i < y.length; i++) {
    x += Math.pow(Number(y[i]), 3);
  }
  return x;
};
// console.log(func45(153))

//  ======================================ISSUE 46==========================================//
const func46 = (n) => {
  let x = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      x++;
    }
  }
  return x === 2 ? true : false;
};
// console.log(func46(8))
// tub son

//  ======================================ISSUE 47==========================================//
const func47 = (n) => {
  let x = 0;
  for (let i = 0; n > 0; n = Math.floor(n / 10)) {
    x++;
  }
  return x;
};
// console.log(func47(12))

//  ======================================ISSUE 48==========================================//

const func48 = (n) => {
  let sum = 0;
  for (let i = 0; n > 0; n = Math.floor(n / 10)) {
    sum += n % 10;
  }
  return sum;
};
// console.log(func48(35))

//  ======================================ISSUE 49==========================================//
const func49 = (n) => {
  let x = 0;
  for (let i = 0; n > 0; n = Math.floor(n / 10)) {
    let r = n % 10;
    x = x * 10 + r;
  }
  return x;
};
// console.log(func49(9865423))

//  ======================================ISSUE 50==========================================//

const func50 = (n) => {
  let sum = 0;
  let original = n;
  for (let i = 0; n > 0; n = Math.floor(n / 10)) {
    let r = n % 10;
    sum = sum * 10 + r;
  }
  return sum === original ? true : false;
};
// console.log(func50(12321))

//  ======================================ISSUE 51==========================================//

const func51 = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
};
// console.log(func51(10))

//  ======================================ISSUE 52==========================================//

const func52 = (n) => {
  let f0 = 1;
  let f1 = 2;
  let fn = 0;
  for (let i = 2; i <= n; i++) {
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
  }
  return fn;
};
// console.log(func52(15))

const modifiedFibonacci = (n) => {
  if (n === 0) return 1; // Modifikatsiya: F_0 = 1
  if (n === 1) return 2; // Modifikatsiya: F_1 = 2

  let f0 = 1; // Boshlang'ich qiymat F_0
  let f1 = 1; // Boshlang'ich qiymat F_1
  let fn = 0;

  for (let i = 2; i <= n; i++) {
    fn = f0 + f1; // Yangi Fibonacci soni
    f0 = f1; // F_0 ni yangilash
    f1 = fn; // F_1 ni yangilash
  }

  return fn; // n-chi elementni qaytarish
};

// console.log(modifiedFibonacci(15)); // Natija: 985

//  ======================================ISSUE 53==========================================//
// nested for

const func53 = (a) => {
  let x = 0;
  for (let i = 1; i < a; i++) {
    x += 1 / i;
  }
  return x;
};
// console.log(func53(10))

//  ======================================ISSUE 54==========================================//

const func54 = (n) => {
  shape = "";
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= n; k++) {
      shape += "* ";
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func54(3))

//  ======================================ISSUE 55==========================================//

const func55 = (n) => {
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      shape += `(${i},${j})`;
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func55(10))

//  ======================================ISSUE 56==========================================//

const func56 = (n) => {
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === 9 || j === 0) {
        shape += `(${i},${j})`;
      }
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func56(10))
//  ======================================ISSUE 57==========================================//

const func57 = (n) => {
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === 9 || j % 2 === 0) {
        shape += `(${i},${j})`;
      } else if (j % 2 !== 0) {
        shape += `     `;
      }
    }
    shape += "\n";
  }
  return shape.trimEnd();
};
// console.log(func57(10))

//  ======================================ISSUE 58==========================================//
const func58 = (n) => {
  count = 0;
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      shape += `${count}`.padEnd(8, " ");
      // shape+=count
      count++;
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func58(10))
// sonlar ro'yxati

//  ======================================ISSUE 59==========================================//
const func59 = (n) => {
  count = 0;
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // shape+='*'
      // count++
      if (j === i) {
        shape += "*";
        count++;
      } else {
        shape += " ";
        count++;
      }
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func59(5))

//  ======================================ISSUE 60==========================================//
const func60 = (n) => {
  count = 0;
  shape = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j) {
        shape += `${i},${j}`;
      } else {
        shape += " ";
      }
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func60(5))

//  ======================================ISSUE 61==========================================//
const func61 = (n) => {
  shape = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + j === n - 1) {
        shape += "*";
      } else {
        shape += " ";
      }
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func61(6));

//  ======================================ISSUE 62==========================================//
const func62 = (n) => {
  shape = "";
  count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || j < i) {
        shape += "*";
        count++;
      } else {
        shape += " ";
        count++;
      }
    }
    shape += "\n";
  }
  return shape;
};
// console.log(func62(5))

//  ======================================ISSUE 63==========================================//
const func63 = (n) => {
   shape ="";
   count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n-i; j++) {
        shape += "*";
        // count++;
   
         }
    shape += "\n";
  }
  return shape;
}
// console.log(func63(5));

//  ======================================ISSUE 64==========================================//

const func64=(n)=>{
    shape=''
    count=0
    for(let i=0; i<=n; i++){
      for(let j=1; j<=n; j++){
        if(i===j || j<i){
          shape+=`${j}`
          count++
        }
        else{
          shape+=' '
          count++
        }
      }
      shape+='\n'
      }
      return shape
}
// console.log(func64(5))

//  ======================================ISSUE 65==========================================//

const func65=(n)=>{
      shape=''
      count=0
      for(let i=1; i<=n; i++){
        for(let j=1 ; j<=n; j++){
          if(j===i || j<i){
            shape+=`${i}`
            count++
          }
          else{
            shape+=' '
            count++
          }
        }
        shape+='\n'
      }
      return shape
}
// console.log(func65(5))
//  ======================================ISSUE 66==========================================//
