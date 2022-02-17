/** @format */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  const operasi = await question('Masukkan Operasi Yang diinginkan: ');
  let angka1, angka2, sisi, rusuk, r, t, result;

  // Ternary Operator
  // operasi == 'Penjumlahan'
  //   ? (result = +angka1 + +angka2)
  //   : operasi == 'Pengurangan'
  //   ? (result = +angka1 - +angka2)
  //   : operasi == 'Perkalian'
  //   ? (result = +angka1 * +angka2)
  //   : operasi == 'Pembagian'
  //   ? (result = +angka1 / +angka2)
  //   : operasi == 'Akar Quadrat'
  //   ? (result = +angka1 / +angka2)
  //   : operasi == 'Luas Persegi'
  //   ? (result = angka1 * angka1)
  //   : (result = 'Operasi Tidak Dikenali');

  // If Else If Else
  if (operasi == 'Penjumlahan') {
    angka1 = await question('Masukkan Angka Pertama: ');
    angka2 = await question('Masukkan Angka Kedua: ');
    result = `Hasil Penjumlahan dari ${angka1} + ${angka2} adalah ${+angka1 + +angka2}`;
  } else if (operasi == 'Pengurangan') {
    angka1 = await question('Masukkan Angka Pertama: ');
    angka2 = await question('Masukkan Angka Kedua: ');
    result = `Hasil Pengurangan dari ${angka1} - ${angka2} adalah ${angka1 - angka2}`;
  } else if (operasi == 'Perkalian') {
    angka1 = await question('Masukkan Angka Pertama: ');
    angka2 = await question('Masukkan Angka Kedua: ');
    result = `Hasil Perkalian dari ${angka1} * ${angka2} adalah ${angka1 * angka2}`;
  } else if (operasi == 'Pembagian') {
    angka1 = await question('Masukkan Angka Pertama: ');
    angka2 = await question('Masukkan Angka Kedua: ');
    result = `Hasil Pembagian dari ${angka1} / ${angka2} adalah ${angka1 / angka2}`;
  } else if (operasi == 'Akar Quadrat') {
    angka1 = await question('Masukkan Angka Pertama: ');
    result = `Akar Quadrat dari ${angka1} adalah ${angka1 ** 2}`;
  } else if (operasi == 'Luas Persegi') {
    sisi = await question('Masukkan Sisi Persegi: ');
    result = `Luas Persegi dengan sisi persegi ${sisi} adalah ${sisi * sisi}cm²`;
  } else if (operasi == 'Volume Kubus') {
    rusuk = await question('Masukkan Rusuk Kubus: ');
    result = `Volume Kubus dengan rusuk kubus ${rusuk} adalah ${rusuk * rusuk * rusuk}cm³`;
  } else if (operasi == 'Volume Tabung') {
    r = await question('Masukkan Jari-Jari alas: ');
    t = await question('Masukkan Tinggi: ');
    result = `Volume Tabung dengan Jari-Jari alas ${r} dan Tinggi ${t} adalah ${3.14 * r * r * t}cm³`;
  } else {
    result = 'Operasi Tidak Dikenali';
  }

  console.log(result);
  rl.close();
};

main();
