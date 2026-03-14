const rows = 5;

for (let i = 0; i < rows; i++) {

    let line = "";

    // spaces before numbers
    for (let s = 0; s < i; s++) {
        line += " ";
    }

    let num = 1;
    let limit = rows - i;

    for (let j = 0; j < limit; j++) {

        line += num + " ";

        // calculate next value using Pascal logic
        num = num * (limit - j - 1) / (j + 1);
    }

    console.log(line.trim());
}
