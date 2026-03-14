// total rows in the pattern
const TOTAL_ROWS = 5;

for (let i = 0; i < TOTAL_ROWS; i++) {

    let output = "";

    // print leading spaces
    for (let s = 0; s < i; s++) {
        output += " ";
    }

    // numbers in current row
    let numbers = TOTAL_ROWS - i;

    for (let j = 0; j < numbers; j++) {

        if (j === 0 || j === numbers - 1) {
            output += "1 ";
        } 
        else {
            output += (numbers - 1) + " ";
        }
    }

    console.log(output.trim());
}
