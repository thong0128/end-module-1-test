// Bài
let points = [38, 55, 52, 53, 50, 55, 62, 73, 11, 82, 72, 44, 10, 3, 18, 40, 85, 77, 99, 66];
function thirdHighest(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i += 1) {
            if (array[i - 1] < array[i]) {
                done = false;
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
            }
        }
    }
    return array[2];
}
console.log(thirdHighest(points));

// Bài 2
function tryRemoveFromArray(array,index) {
    let newArray = [];
    for (const arrayKey in array) {
        if (arrayKey != index){
            newArray.push(array[arrayKey]);
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }
    if (index >=0 && index < array.length){
        array.pop();
    }
    return  array;
}
console.log(points);
console.log(tryRemoveFromArray(points, 2));
console.log(tryRemoveFromArray(points, 20));
console.log(tryRemoveFromArray(points, -2));

// Bài 3
// function checkStrInStrFake(str1,str2) {
//     return str2.includes(str1);
// }
function checkStr1InStr2(str1,str2) {
    for (let i = 0; i < str2.length; i++) {
        let check = true;
        for (let j = 0; j < str1.length ; j++) {
            if (str2[i+j] !== str1 [j]) {
                check = false;
            }
        }
        if (check)
            return check;
        if (str2.length - i < str1.length)
            return false;
    }
}
console.log(checkStr1InStr2("HNo","HPHNHCM"))
// Bài 4
class Rectangle {
    constructor(x, y, width, height, color, ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(canvas) {
        let ctx = document.getElementById(`${canvas}`).getContext("2d");
        ctx.fillStyle = `${this.color}`;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
let rec1 = new Rectangle(10,10,200,100,"#000000");
rec1.render("myCanvas");