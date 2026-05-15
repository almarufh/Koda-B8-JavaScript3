const lingkaran = {
  phiPecahan: 22 / 7,
  phiDesimal: 3.14,
  keliling: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = 0;
    let kelilingLingkaran = 0;

    if (input % 7 == 0) {
      phi = this.phiPecahan;
    } else {
      phi = this.phiDesimal;
    }

    luasLingkaran = phi * input * input;
    console.log("Luaas Lingkaran : ", luasLingkaran);
    return luasLingkaran;
  },
  luas: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = 0;
    let kelilingLingkaran = 0;

    if (input % 7 == 0) {
      phi = this.phiPecahan;
    } else {
      phi = this.phiDesimal;
    }

    kelilingLingkaran = 2 * phi * input;
    console.log("Keliling Lingkaran : ", kelilingLingkaran);
    return luasLingkaran;
  },
};

console.clear();

console.log(`Memanggil Function untun mengambil Nilai dari return\n`);
console.log("Keliling Lingkaran : ", lingkaran.keliling(10));
console.log("Luas Lingkaran : ", lingkaran.luas(10));

console.log(`\nMemanggil Function untuk memuncukan hasil script\n`);
lingkaran.keliling(10);
lingkaran.luas(10);
