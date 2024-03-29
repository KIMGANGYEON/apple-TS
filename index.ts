let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 123 };

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));

type Animal = string | number | undefined;
type Animal2 = { name: string; age: number };

let abc: Animal = 0;
let abc2: Animal2 = { name: "kib", age: 20 };

type Girlfriend = {
  readonly name: string;
};

type Name = string;
type Age = number;
type Person = Name | Age;
// let testx: Person = { a: "sdf" };

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

type User = { name: string; email?: string; phone: string };
type Adult = { adult: boolean };

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: "123",
};

function 함수(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
함수("가위");

var 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}
내함수(자료.name);

type 함수타입 = (a: string) => number;

let 함수2: 함수타입 = function (a) {
  return 10;
};

type Member = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("hello");
  },
};

회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x: string) => string;

let cutZero: CutType = function (a) {
  let result = a.replace(/^0+/, "");
  return result;
};
function removeDash(a: string): number {
  let result = a.replace(/-/g, "");
  return parseFloat(result);
}
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
만들함수("010-1155-2222", cutZero, removeDash);

// let 제목 = document.querySelector(".title");
// if (제목 != null) {
//   제목.innerHTML = "반가워요";
// }

// let 제목 = document.querySelector(".title");
// if (제목 instanceof Element) {
//   제목.innerHTML = "반가워요2";
// }

// let 제목 = document.querySelector(".title") as Element;
// 제목.innerHTML = "반가워요";

// let 제목 = document.querySelector(".title");
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = "반갑소";
// }

// let 링크 = document.querySelector(".link");
// if (링크 instanceof HTMLAnchorElement) {
//   링크.href = "https://kakao.com";
// }

let 버튼 = document.getElementById("button");
버튼?.addEventListener("click", function () {
  let 이미지 = document.querySelector("#image");
  if (이미지 instanceof HTMLImageElement) {
    이미지.src =
      "data:image/jpeg;base64,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";
  }
});

let 링크 = document.querySelectorAll(".link");

링크.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});

class Hero {
  name: string;
  constructor(a) {
    this.name = a;
  }
}
let zzz = new Hero("good");
let zzz2 = new Hero("good2");

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']

interface Square {
  color: string;
  width: number;
}
let 네모 = { color: "red", width: 100 };

type Dog = { name: string };
type Cat = { age: number } & Dog;

//interface 중복선언 가능 2개 합치는거 가능

interface Square2 {
  name: string;
}
interface Square3 extends Square2 {
  age: number;
}
let 네모2: Square2 = { name: "red" };
let 네모3: Square3 = { name: "red", age: 100 };

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let 큧: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

function abc3(...a: number[]) {
  console.log(a);
}
abc3(1, 2, 3, 4, 5);

let [a1, a2] = ["안녕", 300];

let { student, age2 } = { student: true, age2: 20 };

let obj3 = { student: true, age2: 20 };

function abc4({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

abc4({ student: true, age: 20 });
// abc4(obj3);

type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function 함수3({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

함수3({ user: "kim", comment: [3, 5, 4], admin: false });

type 어레이 = (number | string | boolean)[];

function 함수4([a, b, c]: 어레이) {
  console.log(a, b, c);
}

함수4([40, "wine", false]);

function 최댓값(...x: number[]) {
  let result = 0;
  x.forEach((i) => {
    if (result < i) {
      result = i;
    }
  });
  return result;
}
console.log(최댓값(4, 6, 3, 2));

type Fish = { swim: string };
type Bird = { fly: string };

function 함수5(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

let 날짜 = new Date();
if (날짜 instanceof Date) {
}

type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수6(x: Car2 | Bike) {
  if (x.wheel === "4개") {
  }
}

function printAll(strs: string | undefined) {
  if (strs && typeof strs === "string") {
    console.log();
  }
}

function 함수7(): never {
  throw new Error("에러메세지");
}

class User2 {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = "zzz";
  }
}

let 유저1 = new User2("park");
// 유저1.name = "안농";
유저1.이름변경함수();

class NewUser2 extends User2 {}

let 사람 = new NewUser2("zxc");

class Person2 {
  constructor(public name, age: number) {}
}
let 자식 = new Person2("김", 20);

class User3 {
  protected x = 10;
  private static y = 20;
}

class NewUser3 extends User3 {
  doThis() {
    this.x = 20;
  }
}

let qwer = new NewUser3();
qwer.doThis();

class User4 {
  static skill = "js";
  intro = "난" + User4.skill + "전문가";
}

let 철수2 = new User4();
console.log(철수2);

User4.skill = "ts";

let 철수3 = new User4();
console.log(철수3);

class User5 {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number) {
    User5.x += 파라미터;
  }

  static printX() {
    console.log(User5.x);
  }
}
User5.addOne(3);
User5.addOne(10);
User5.printX();

function 함수8<Type>(x: Type[]): Type {
  return x[0];
}

let a = 함수8<number>([4, 2]);
console.log(a);

// import { 나는 } from "./a";

// console.log(나는);

interface LengthCheck {
  length: number;
}

function 함수9<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let a3 = 함수9<string[]>(["100"]);

// function 함수9<MyType extends number>(x: MyType) {
//   return x - 1;
// }
// let a3 = 함수9<number>(100);

let 멍멍: [string, boolean?] = ["dog", true];

function 함수10(...x: [number, string]) {
  console.log(x);
}
함수10(1, "2");

let arr = [1, 2, 3, 4];
let arr2: [number, number, ...number[]];

function 함수11(...rest: [string, boolean, ...(number | string)[]]) {}

함수11("a", true, 6, 3, "1", 4);

function 함수12(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}

interface Person3 {
  age: number;
  name: string;
}

type Person3Keys = keyof Person3;
let a4: Person3Keys = "name";

type Car3 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새거 = TypeChanger<Car3>;

type Age3<T> = T extends string ? string : unknown;
let a5: Age3<string>;

type FirstItem<T> = T extends any[] ? T[0] : any;

let age4: FirstItem<string[]>;
let age5: FirstItem<number>;

type Age5<T> = T extends [string, ...any] ? T[0] : unknown;
let age6: Age5<[string, number]>;
let age7: Age5<[boolean, number]>;

type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
type a = 타입뽑기<(x: number) => void>;
