var myMath;
(function(myMath) {
  var PI = 3.14;
  function calculateCircumference(diameter) {
    return diameter * PI;
  }
  myMath.calculateCircumference = calculateCircumference;
})(myMath || (myMath = {}));
var myMath;
(function(myMath) {
  function calculateRectangleArea(width, length) {
    return width * length;
  }
  myMath.calculateRectangleArea = calculateRectangleArea;
})(myMath || (myMath = {}));
///<reference path="circleMath.ts" />
///<reference path="rectangleMath.ts" />
console.log(myMath.calculateRectangleArea(10, 20));
console.log(myMath.calculateCircumference(25));
