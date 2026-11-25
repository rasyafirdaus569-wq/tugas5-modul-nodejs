// Mengimpor ke-4 modul menggunakan require()
const { tentukanGrade } = require("./modules/konversiNilai");
const { hitungRataRata, cariNilaiTertinggi } = require("./modules/statistik");
const { cekKelulusan, isNilaiValid } = require("./modules/validasi");
const { cetakHeader, cetakBarisMahasiswa } = require("./modules/formatLaporan");

// Data mahasiswa
const dataMahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 72 },
    { nama: "Citra", nilai: 55 },
    { nama: "Dewi", nilai: 91 }
];

// Eksekusi program utama
cetakHeader("Laporan Evaluasi Nilai Mahasiswa");

const daftarNilaiValid = [];

dataMahasiswa.forEach((mhs) => {
    if (isNilaiValid(mhs.nilai)) {
        const grade = tentukanGrade(mhs.nilai);
        const status = cekKelulusan(mhs.nilai);
        cetakBarisMahasiswa(mhs.nama, mhs.nilai, grade, status);
        daftarNilaiValid.push(mhs.nilai);
    } else {
        console.log(`Data nilai untuk ${mhs.nama} tidak valid.`);
    }
});

console.log("----------------------------------------");
console.log(`Rata-rata Nilai Kelas : ${hitungRataRata(daftarNilaiValid)}`);
console.log(`Nilai Tertinggi Kelas : ${cariNilaiTertinggi(daftarNilaiValid)}`);
console.log("========================================");