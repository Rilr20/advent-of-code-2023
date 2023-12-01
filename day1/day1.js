'use strict';
const fs = require("fs");

let filename = "input.txt"

function myfun(filePath) {
    return fs.readFileSync(filePath);
}
let res = myfun('input.txt')
let documentstring = res.toString();

let documentRow = documentstring.split("\n")

let sum=0;
documentRow.forEach((row) => {
    let number = FindNumbers2(row);
    sum = sum + number;
}) 
console.log(sum);

function FindNumbers(line) {
    line = line.replace(/[a-z]/g, '');
    if (line.length == 1) {
        return parseInt(line+line);
    } else {
        return parseInt(line[i] + line[line.length-1])
    }
}
function FindNumbers2(line) {
    const numbers = ['one','two','three','four','five','six','seven','eight','nine', '1','2','3','4','5','6','7','8','9']
    let number_alpha_start_pos = []
    let number_alpha_end_pos = []
    numbers.forEach((number) => {
        number_alpha_start_pos.push(line.indexOf(number))
    })
    numbers.forEach((number) => {
        number_alpha_end_pos.push(line.lastIndexOf(number))
    })
    // log(number_alpha_end_pos)
    if (only_one_num(number_alpha_end_pos)) {
        let num = highest_num_in_array(number_alpha_start_pos);
        // let num = 0
        return parseInt(`${num}${num}`)
    }
    let first_num = lowest_num_in_array(number_alpha_start_pos)
    let last_num = highest_num_in_array(number_alpha_end_pos) 
    // let last_num = 0
    console.log(`${first_num}${last_num}`);
    return parseInt(`${first_num}${last_num}`)
}

function only_one_num(array) {
    const result = array.filter((num) => num != -1);
    return result.length >= 1 ? false : true
}

function highest_num_in_array(array) {
    let index = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] > array[index]) {
            // console.log("time to if" + i);
            index = i
        }
    }
    return convert_index_to_num(index)
}

function lowest_num_in_array(array) {
    let index = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[index] == -1) {
            index = i
        }
        if (array[i] !== -1 && array[i] < array[index]) {
            index = i
        }
    }
    return convert_index_to_num(index)
}

function convert_index_to_num(index) {
    // console.log("index before change " + index);
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // if (index >= 9) {
    //     index = index - 8
    // }
    // console.log(numbers[index]);
    return numbers[index]
}