let row = 10;
let column = 20;
let hasil = "";

for (let i = 0; i <= row; i++) {
    for (let j = 0; j < column; j++) {
        hasil += ((column - row) * i) + j + '\t';
    }
    hasil += '\n';
}

console.log(hasil);