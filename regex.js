/*
SOAL 1 :
Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string 
mengandung huruf besar atau tidak.
    Jika huruf pertama adalah huruf besar. 
        Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
    Jika huruf pertama bukan huruf besar. 
        Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’
*/

//SOLVE

function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("Huruf pertama adalah huruf besar");
  } else {
    console.log("Huruf pertama adalah huruf kecil");
  }
}
upper_case("bcd");

/*
SOAL 2 :
Buat sebuah program untuk memvalidasi format nomor handphone
    Nomor handphone minimum o10 digit dan maksimum 12 digit
    Hanya menerima digit karakter
*/

//SOLVE 
function digitCase(num) {
  regexp = /^\d{10,12}$/;
  if (regexp.test(num)) {
    console.log("yes benar");
  } else {
    console.log("Harus number minimal 10 maksimal 12 digit");
  }
}

digitCase(1234567890111);
/*
SOAL 3 :
Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
    Bagaimana cara memulai usaha bisnis
    Bootcamp impact byte
    Status covid hari ini
*/

//SOLVE

function stringStrengh(words) {
    regexp = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
    if(regexp.test(words)) {
        console.log("Yeah, Great !");
    } else {
        console.log("try again !!!");
    }
}

stringStrengh("Status covid hari ini");