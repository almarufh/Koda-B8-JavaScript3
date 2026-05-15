const lingkaran = {
  phiPecahan: 22 / 7,
  phiDesimal: 3.14,
  keliling: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = 0;
    let luasLingkaran = 0;
    let kelilingLingkaran = 0;

    if (input % 7 == 0) {
      phi = this.phiPecahan;
    } else {
      phi = this.phiDesimal;
    }

    luasLingkaran = phi * input * input;
    return luasLingkaran;
  },
  luas: function (input) {
    if (typeof input !== "number") {
      console.log("Parameter must be number");
      return;
    }

    let phi = 0;
    let luasLingkaran = 0;
    let kelilingLingkaran = 0;

    if (input % 7 == 0) {
      phi = this.phiPecahan;
    } else {
      phi = this.phiDesimal;
    }

    luasLingkaran = 2 * phi * input;
    return luasLingkaran;
  },
};

console.log("Keliling Lingkaran : ", lingkaran.keliling(10));
console.log("Luas Lingkaran : ", lingkaran.luas(10));
