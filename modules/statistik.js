const hitungRataRata = (daftarNilai) => {
    const total = daftarNilai.reduce((acc, nilai) => acc + nilai, 0);
    return (total / daftarNilai.length).toFixed(2);
};

const cariNilaiTertinggi = (daftarNilai) => {
    return Math.max(...daftarNilai);
};

module.exports = { hitungRataRata, cariNilaiTertinggi };