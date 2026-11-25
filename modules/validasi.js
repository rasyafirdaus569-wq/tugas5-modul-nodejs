const cekKelulusan = (nilai) => {
    return nilai >= 60 ? "LULUS" : "TIDAK LULUS";
};

const isNilaiValid = (nilai) => {
    return typeof nilai === "number" && nilai >= 0 && nilai <= 100;
};

module.exports = { cekKelulusan, isNilaiValid };