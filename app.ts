//this was for using namespaces

// /<reference path="circleMath.ts" />
// ///<reference path="rectangleMath.ts" />
// import CircleMath = myMath.Circle;

// console.log(myMath.calculateRectangleArea(10, 20));
// console.log(CircleMath.calculateCircumference(25));

//for using modules

import { PI, calculateCircumference } from "./math/circle";
console.log(PI);
console.log(calculateCircumference(3));
console.log();
