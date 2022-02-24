const MAX = 5;
let hasil = "";

for(let a = 1; a <= MAX; a++){
    for(b = a; b <= MAX; b++){
        hasil += ' '
    }
    for(c = 1; c <= a; c++){
        hasil += '*'
    }
    for(d = 1; d <= a-1; d++){
    hasil += '*'
    }
    hasil += '\n'
}

console.log(hasil);