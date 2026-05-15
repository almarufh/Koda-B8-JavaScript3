const lingkaran = {
  phiPecahan: 22 / 7,
  phiDesimal: 3.14,
  phi: function (input) {
    let phi = 0;
    if (input % 7 == 0) {
      phi = this.phiPecahan;
    } else {
      phi = this.phiDesimal;
    }
    return phi;
  },
  keliling: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = this.phi(input);
    let kelilingLingkaran = 0;

    luasLingkaran = phi * input * input;
    console.log("Luaas Lingkaran : ", luasLingkaran);
    return luasLingkaran;
  },
  luas: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = this.phi(input);
    let kelilingLingkaran = 0;

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
