var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 회원들 = [1, "2", 3];
var 오브젝트 = { a: 123 };
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
function 결혼가능하냐(money, house, charm) {
    var score = 0;
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
var abc = 0;
var abc2 = { name: "kib", age: 20 };
var position = { x: 10, y: 20 };
var 회원가입정보 = {
    name: "kim",
    adult: false,
    phone: "123",
};
function 함수(a) {
    return ["가위"];
}
함수("가위");
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
var 함수2 = function (a) {
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("hello");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
function removeDash(a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
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
var 버튼 = document.getElementById("button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    var 이미지 = document.querySelector("#image");
    if (이미지 instanceof HTMLImageElement) {
        이미지.src =
            "data:image/jpeg;base64,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";
    }
});
var 링크 = document.querySelectorAll(".link");
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
var Hero = /** @class */ (function () {
    function Hero(a) {
        this.name = a;
    }
    return Hero;
}());
var zzz = new Hero("good");
var zzz2 = new Hero("good2");
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
var 네모 = { color: "red", width: 100 };
var 네모2 = { name: "red" };
var 네모3 = { name: "red", age: 100 };
var 큧 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
function abc3() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
abc3(1, 2, 3, 4, 5);
var _a = ["안녕", 300], a1 = _a[0], a2 = _a[1];
var _b = { student: true, age2: 20 }, student = _b.student, age2 = _b.age2;
var obj3 = { student: true, age2: 20 };
function abc4(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
abc4({ student: true, age: 20 });
function 함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수([40, "wine", false]);
function 최댓값() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    x.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(4, 6, 3, 2));
