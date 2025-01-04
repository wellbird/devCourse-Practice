// 함수는 함수의 매개변수가 될 수 있음
function first(arg) {
  arg();
}
function second() {
  console.log('second');
}
first(second);

// 함수는 함수의 반환값이 될 수 있음
function third(arg) {
  return arg;
}
function fourth() {
  console.log('fourth');
}
third(fourth)();

// 함수는 할당명령문의 대상이 될 수 있음
// 함수는 동일비교의 대상이 될 수 있음
const fifth = function (arg) {
  return arg;
};
fifth('fifth');

// 기본값 매개변수
function sixth(arg = 'sixth') {
  console.log(arg);
}
sixth();

// 나머지 매개변수
function seventh(arg, ...rest) {
  console.log(rest);
}
seventh(1);
seventh(1, 2, 3, 4);

// arguments 객체
function eighth(arg) {
  console.log(arguments);
}
eighth(1, 2, 3, 4);

// 함수 선언문
function ninth() {
  console.log('ninth');
}
ninth();

// 함수 표현식
const tenth = function () {
  console.log('tenth');
};
tenth();

// Function 생성자 함수
const eleventh = new Function('console.log("eleventh")');
eleventh();

// 화살표 함수 표현식
const twelfth = () => {
  console.log('twelfth');
};
twelfth();

// IIFE(즉시 실행 함수)
(function thirteenth() {
  console.log('thirteenth');
})();

// 재귀함수
function fourteenth(arg) {
  if (arg === 3) return;
  console.log(arg);
  fourteenth(++arg);
}
fourteenth(1);

// 중첩함수
function fifteenth(arg1) {
  function sixteenth() {
    console.log(arg1);
  }
  sixteenth();
}
fifteenth('fifteenth');

// 콜백함수
function seventeenth(arg) {
  arg();
}
seventeenth(() => {
  console.log('seventeenth');
});
