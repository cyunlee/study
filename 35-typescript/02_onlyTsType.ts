// Tuple
let drink: [string, string] = ['cola', 'cider'];
drink[0] = '콜라';
drink[1] = '사이다';
//drink[2] = ('환타'); // Tuple의 한계를 넘기 때문에 에러 발생
//drink.push('환타'); // 요소 추가는 가능하지만 Tuple 타입을 사용하는 이유가 사라지게 됨
console.log(drink);

//readonly: 요소 타입과 순서와 길이를 고정
let drink2: readonly [string, number] = ['사이다', 1500];
drink.push('환타'); //type error

//enum type
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

console.log(Auth.user);

enum Cafe {
  americano = '아메리카노',
  latte = '라떼',
}

enum Cake {
  choco,
  cream,
  fruit = '과일 케이크',
}

console.log(Cake.choco);
console.log(Cake.fruit);

// 명시적으로
let value: any;
value = 1;
value = 'str';
value = false;
value = null;
value = [1, 2, '3', ['a', 'b', 'c']];

// 암묵적으로
let value2;
value2 = 100;
value2 = 'str2';
value2 = true;
value2 = null;
value2 = ['a', 'b', 5, { name: 'layla' }];

/////////////////////////////////////////
// type&interface

// interface
interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

const student: Student = {
  name: 'siyun',
  grade: 1,
  isPassed: true,
};

const student2: Student = {
  name: 'luna',
  grade: 5,
  isPassed: true,
};

//object 타입 사용 시 key의 value의 타입을 지정하지 않음
const student3: object = {
  name: 'yuki',
  grade: 3,
  isPassed: true,
};

//interface 상속
enum Score {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  backNumber?: number; // ? : 있어도 되고 없어도 에러 발생하지 않음
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  //backNumber: 29,
  1: Score.A,
};

//type
type Gender = 'Female' | 'Male';
const gender: Gender = 'Female';
//const gender2:Gender = 'female'; //type에서 지정하지 않은 값이 들어올 경우 type error

//enum vs type
enum UserNumber {
  one = 1,
  ten = 10,
}

type UserNumber2 = 1 | 10;

//enum
const num1: UserNumber = UserNumber.ten;
//type
const num2: UserNumber2 = 10;

//교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  price: number;
}

interface Car {
  name: string;
  price: number;
  color: string;
}

//합칠 때는 type과 &연산자를 사용한다
type ToyCar = Toy & Car
const toycar: ToyCar = {
    name: 'tayo',
    price: 56000,
    color: 'blue'
};

//type Gender = 'Female' | 'Male';

type Person  = {
    name: string;
    age: number;
    hobby: string[];
    gender: Gender;
};

let siyun: Person = {
    name: 'Siyun',
    gender: 'Female',
    age: 25,
    hobby: ['baking', 'sleeping']
};




