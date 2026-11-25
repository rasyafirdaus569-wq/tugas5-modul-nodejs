const cetakHeader = (judul) => {
    console.log("========================================");
    console.log(`   ${judul.toUpperCase()}`);
    console.log("========================================");
};

const cetakBarisMahasiswa = (nama, nilai, grade, status) => {
    console.log(`Nama: ${nama.padEnd(8)} | Nilai: ${String(nilai).padEnd(3)} | Grade: ${grade} | Status: ${status}`);
};

module.exports = { cetakHeader, cetakBarisMahasiswa };