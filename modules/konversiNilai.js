const tentukanGrade = (nilai) => {
    if (nilai >= 80 && nilai <= 100) return "A";
    if (nilai >= 70 && nilai < 80) return "B";
    if (nilai >= 60 && nilai < 70) return "C";
    if (nilai >= 50 && nilai < 60) return "D";
    return "E";
};

module.exports = { tentukanGrade };