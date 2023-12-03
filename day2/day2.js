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
documentRow.forEach((row) => {
    let game_id = row.split(":");
    let rounds = game_id[1].split(";");
    let meets_criteria = true;
    rounds.forEach((round) => {
        let obj = color_object(round);
        // console.log(obj);
        // 12 red
        // 13 green
        // 14 blue
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
        console.log(game_id[0].split(" ")[1]);
        sum = sum + parseInt(game_id[0].split(" ")[1]);
    }
})
console.log(sum)

function color_object(round) {
    let colours = round.split(",");
    let object = {}
    colours.forEach((color) => {
        if (color.indexOf("blue") !== -1) {
            // console.log(color);
            // console.log(color.split(" "));
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