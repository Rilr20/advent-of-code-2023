'use strict';
const fs = require("fs");

let filename = "input.txt"

function myfun(filePath) {
    return fs.readFileSync(filePath);
}
let res = myfun(filename)
let documentstring = res.toString();

let documentRow = documentstring.split("\n")

let sum = 0
let second_sum = 0
documentRow.forEach((row) => {
    let game_id = row.split(":");
    let rounds = game_id[1].split(";");
    let meets_criteria = true;
    let red = 0;
    let green = 0;
    let blue = 0;
    rounds.forEach((round) => {
        let obj = color_object(round);

        if (parseInt(obj.red) > parseInt(red)) {
            red = obj.red
        }
        if (parseInt(obj.green) > parseInt(green)) {
            green = obj.green
        }
        if (parseInt(obj.blue) > parseInt(blue)) {
            blue = obj.blue
        }
        if (obj.red > 12) {
            meets_criteria=false;
        }
        if (obj.green > 13) {
            meets_criteria=false;
        }
        if (obj.blue > 14) {
            meets_criteria=false;
        }
    })
    if (meets_criteria) {
        // console.log(game_id[0].split(" ")[1]);
        sum = sum + parseInt(game_id[0].split(" ")[1]);
    }
    second_sum = second_sum + (red * green*blue);
})
console.log(sum)
console.log(second_sum)

function color_object(round) {
    let colours = round.split(",");
    let object = {}
    colours.forEach((color) => {
        if (color.indexOf("blue") !== -1) {
            object.blue = color.split(" ")[1]
        }
        else if (color.indexOf("red") !== -1) {
            object.red = color.split(" ")[1]
        }
        else if (color.indexOf("green") !== -1) {
            object.green = color.split(" ")[1]
        }
    })
    return object
}