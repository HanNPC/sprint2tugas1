function nm(panjang, lebar, tinggi) {
    volume = panjang * lebar * tinggi
    luasbalok = 2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi);
    document.write("Panjang : " + panjang + "<br>");
    document.write("Lebar : " + lebar + "<br>");
    document.write("Tinggi : " + tinggi + "<br>")
    document.write("Volume Balok : " + volume + "<br>");
    document.write("Luas Balok : " + luasbalok);
}
inputpanjang = prompt("Masukan Nilai Panjang");
inputlebar = prompt("Masukan Nilai Lebar");
inputtinggi = prompt("Masukan Nilai Tinggi");
nm(inputpanjang, inputlebar, inputtinggi)