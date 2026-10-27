
// 1. Pesan JavaScript
function pesanJavaScript() {
    alert("Anyeong! Selamat belajar JavaScript!");

    document.getElementById("pesan").textContent =
        "anyeong! selamat belajar JavaScript.";
}


// 2. Nama dan Umur
function tampilkanNama() {
    let hasil = document.getElementById("hasilNama");

    if (hasil.textContent !== "") {
        hasil.textContent = "";
        return;
    }

    let nama = document.getElementById("nama").value.trim();
    let umur = document.getElementById("umur").value;

    if (nama === "" || umur === "") {
        hasil.textContent = "Nama dan umur harus diisi!";
    } else if (Number(umur) < 0) {
        hasil.textContent = "Umur tidak boleh negatif!";
    } else {
        hasil.textContent =
            "Halo, " + nama + "! Umur kamu " + umur + " tahun.";
    }
}


// 3. Kalkulator
function hitung() {
    let hasil = document.getElementById("hasilKalkulator");

    if (hasil.textContent !== "") {
        hasil.textContent = "";
        return;
    }

    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let operator = document.getElementById("operator").value;

    if (angka1 === "" || angka2 === "") {
        hasil.textContent = "Masukkan kedua angka!";
        return;
    }

    let a = Number(angka1);
    let b = Number(angka2);
    let total;

    if (operator === "+") {
        total = a + b;
    } else if (operator === "-") {
        total = a - b;
    } else if (operator === "*") {
        total = a * b;
    } else {
        if (b === 0) {
            hasil.textContent = "Tidak bisa dibagi nol!";
            return;
        }

        total = a / b;
    }

    hasil.textContent = "Hasil: " + total;
}


// 4. Ganti warna dengan nama warna asli
const daftarWarna = [
    "lavenderblush",
    "lightblue",
    "lightgreen",
    "lavender",
    "lightyellow",
    "lightsalmon",
    "mistyrose",
    "powderblue"
];

let indeksWarna = 0;

function gantiWarna() {
    indeksWarna++;

    if (indeksWarna >= daftarWarna.length) {
        indeksWarna = 0;
    }

    let warna = daftarWarna[indeksWarna];

    document.body.style.backgroundColor = warna;

    document.getElementById("namaWarna").textContent =
        "Warna sekarang: " + warna;
}


// 5. Reset Semua
function resetSemua() {
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("operator").value = "+";

    document.getElementById("pesan").textContent = "";
    document.getElementById("hasilNama").textContent = "";
    document.getElementById("hasilKalkulator").textContent = "";

    indeksWarna = 0;
    document.body.style.backgroundColor = "lavenderblush";

    document.getElementById("namaWarna").textContent =
        "Warna sekarang: lavenderblush";
}
