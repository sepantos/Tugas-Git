var readline =  require('readline-sync');
var a = readline.question('Masukan bilangan bulat: ');
var b = readline.question('Masukan nilai bilagan ganjil: ');
var c = toString(a,b);
var d = parseInt(a,b);

console.log("Sebelum konversi tipe data");
console.log('Tipe a: ' + typeof c);
console.log('Tipe b: ' + typeof c);

console.log('Setelah konveri tipe data');
console.log('Tipe a: ' + typeof d);
console.log('Tipe b: ' + typeof d);
