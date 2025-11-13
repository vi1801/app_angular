// function custom_log(message){
//     console.log(message);
// }
// var message = 'Hello';
// log(message);
// function doSomething() {
//     for (var i=0; i<5; i++) {
//         console.log(i);
//     }
//     console.log("Finally "+ i);
// }
// // var let's nearby function use the variable, let doesn't
// doSomething();
// var count=5;
// count = 6;
// let a: number;
// a=5;
// let b: number[] = [1,2,3];
// let c: any[] = [1,true,'a'];
// const colorRed = 0;
// const colorGreen = 1;
// enum Color { Red = 0, Green = 1, Blue = 2 };
// let bgColor = Color.Green;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
// doLog('Hello World');
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2); //object
point.x = 10;
point.draw();
