const shapesOption = document.getElementById("shape-option");
const lengthUnitOption = document.getElementById("length-unit-option");
const heroHeader = document.getElementById("hero-header");
const heroImage = document.getElementById("hero-image");
const input = document.querySelectorAll("input");
const input1 = document.getElementById("first-number");
const input2 = document.getElementById("second-number");
const input3 = document.getElementById("third-number");
const hitungButton = document.getElementById("hitung-button");
const resetButton = document.getElementById("reset-button");
const outputDesc = document.getElementById("output-desc");
const output = document.getElementById("output");
const pi = Math.PI;
let lengthUnit;
let result;
let shapesOperation;
let setDisplay;
let outputDescText = document.innerHTML;

// Validate Input
function validateInput() {
  outputDesc.innerText = "Input Tidak Boleh Kosong";
  output.innerText = "";
}

// Default length unit value
function defaultLengthUnit() {
  lengthUnitOption.addEventListener("change", () => {
    lengthUnit = lengthUnitOption.value;
  });
  if (lengthUnitOption.value === "cm") {
    lengthUnit = "cm";
  }
}
defaultLengthUnit();

// Output Luas Bangun
function luasOutput() {
  if (lengthUnit) {
    output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result} ${lengthUnit}<sup>2</sup>`;
    return;
  } else if (!lengthUnit) {
    output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result}`;
  }
}

// Output Keliling Bangun
function kelilingOutput() {
  if (lengthUnit) {
    output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result} ${lengthUnit}`;
    return;
  } else if (!lengthUnit) {
    output.innerHTML = `Jadi hasil dari ${shapesOption.value} adalah ${result}`;
  }
}

// Reset Button Function
function resetOperation() {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
  outputDesc.innerText = "";
  output.innerText = "";
}
resetButton.addEventListener("click", resetOperation);

//Math Functions and Result Output
class JajarGenjang {
  constructor(a, t, b) {
    this.a = a;
    this.t = t;
    this.b = b;
  }
  KelilingJajarGenjang() {
    result = this.a * this.t;
    result = result.toPrecision(3);
    outputDescText = `K = a * t <br> K= ${this.a} * ${this.t} <br> K= ${result} ${lengthUnit}`;
    outputDesc.innerHTML = outputDescText;
    kelilingOutput();
  }
  luasJajarGenjang() {
    result = 2 * (this.a + this.b);
    result = result.toPrecision(2);
    outputDescText = `L = 2 x a + b <br> L = 2 x ${this.a} + ${this.b} <br> L = ${result} ${lengthUnit}`;
    outputDesc.innerHTML = outputDescText;
    luasOutput();
  }
}
class Segitiga {
  constructor(a, t, b) {
    this.a = a;
    this.t = t;
    this.b = b;
  }
  kelilingSegitiga() {
    result = this.a + this.b + this.t;
    result = result.toPrecision(3);
    outputDescText = `K = a + b + t <br> K = ${this.a} + ${this.b} + ${this.t} <br> K = ${result} ${lengthUnit}`;
    outputDesc.innerHTML = outputDescText;
    kelilingOutput();
  }
  luasSegitiga() {
    result = (this.a * this.t) / 2;
    result = result.toPrecision(3);
    outputDescText = `L = a x t ÷ 2 <br> L = ${this.a} x ${this.t} ÷ 2 <br> L = ${result} ${lengthUnit}<sup>2</sup>`;
    outputDesc.innerHTML = outputDescText;
    luasOutput();
  }
}

// Display Functions (Hero Header, Hero Image, Input Display, Input Placeholder Attribute)
class Display {
  constructor() {
    this.heroHeader = heroHeader;
    this.heroImage = heroImage;
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }

  kelilingSegitigaDisplay() {
    // Hero
    this.heroHeader.innerText = "Segitiga";
    this.heroImage.setAttribute("src", "./assets/images/triangle.png");

    // Input 1
    this.input1.value = "";
    this.input1.setAttribute("placeholder", "Masukkan Sisi A (a)");

    // Input 2
    this.input2.style.display = "block";
    this.input2.value = "";
    this.input2.setAttribute("placeholder", "Masukkan Sisi B (b)");

    // Input 3
    this.input3.style.display = "block";
    this.input3.value = "";
    this.input3.setAttribute("placeholder", "Masukkan Sisi C (t)");
  }
  luasSegitigaDisplay() {
    // Hero
    this.heroHeader.innerText = "Segitiga";
    this.heroImage.setAttribute("src", "./assets/images/triangle.png");

    // Input 1
    this.input1.value = "";
    this.input1.setAttribute("placeholder", "Masukkan Sisi Alas (a)");

    // Input 2
    this.input2.style.display = "block";
    this.input2.value = "";
    this.input2.setAttribute("placeholder", "Masukkan Sisi Tinggi (t)");

    // Input 3
    this.input3.style.display = "none";
  }

  kelilingJajarGenjangDisplay() {
    // Hero
    this.heroHeader.innerText = "Jajar Genjang";
    this.heroImage.setAttribute("src", "./assets/images/jargen.png");

    // Input 1
    this.input1.value = "";
    this.input1.setAttribute("placeholder", "Masukkan Sisi A (a)");

    // Input 2
    this.input3.style.display = "block";
    this.input3.value = "";
    this.input3.setAttribute("placeholder", "Masukkan Sisi C (b)");
  }

  luasJajarGenjangDisplay() {
    // Hero
    this.heroHeader.innerText = "Jajar Genjang";
    this.heroImage.setAttribute("src", "./assets/images/jargen.png");

    // Input 1
    this.input1.value = "";
    this.input1.setAttribute("placeholder", "Masukkan Sisi (a)");

    // Input 2
    this.input2.style.display = "block";
    this.input2.value = "";
    this.input2.setAttribute("placeholder", "Masukkan Sisi (t)");

    // Input 3
    this.input3.style.display = "none";
  }
}

// magical Calculator Function
const magicalCalculatorFunction = () => {
  // Validate Math Operation
  const calculateKelilingSegitiga = () => {
    if (input1.value === "" || input2.value === "" || input3.value === "") {
      validateInput();
      return;
    }
    shapesOperation = new Segitiga(
      parseFloat(input1.value),
      parseFloat(input2.value),
      parseFloat(input3.value)
    );
    shapesOperation.kelilingSegitiga();
  };
  const calculateeLuasSegitiga = () => {
    if (input1.value === "" || input2.value === "") {
      validateInput();
      return;
    }
    shapesOperation = new Segitiga(input1.value, input2.value);
    shapesOperation.luasSegitiga();
  };
  const calculateKelilingJajarGenjang = () => {
    if (input1.value === "" || input2.value === "") {
      validateInput();
      return;
    }
    shapesOperation = new JajarGenjang(input1.value, input2.value);
    shapesOperation.KelilingJajarGenjang();
  };
  const calculateeLuasJajarGenjang = () => {
    if (input1.value === "" || input2.value === "") {
      validateInput();
      return;
    }
    shapesOperation = new JajarGenjang(input1.value, input2.value);
    shapesOperation.luasJajarGenjang();
  };

  // Setting Display and Math Operation when option is selected
  shapesOption.addEventListener("change", () => {
    hitungButton.removeEventListener("click", calculateKelilingSegitiga);
    hitungButton.removeEventListener("click", calculateeLuasSegitiga);
    hitungButton.removeEventListener("click", calculateKelilingJajarGenjang);
    hitungButton.removeEventListener("click", calculateeLuasJajarGenjang);

    // Remove Value from Input
    resetOperation();

    // Setting Display and Math Operation Using Switch Conditional
    let shapesOptionValues = shapesOption.value;
    switch (shapesOptionValues) {
      case "Keliling Segitiga":
        setDisplay = new Display();
        setDisplay.kelilingSegitigaDisplay();
        hitungButton.addEventListener("click", calculateKelilingSegitiga);
        break;
      case "Luas Segitiga":
        setDisplay = new Display();
        setDisplay.luasSegitigaDisplay();
        hitungButton.addEventListener("click", calculateeLuasSegitiga);
        break;
      case "Keliling Jajar Genjang":
        setDisplay = new Display();
        setDisplay.kelilingJajarGenjangDisplay();
        hitungButton.addEventListener("click", calculateKelilingJajarGenjang);
        break;
      case "Luas Jajar Genjang":
        setDisplay = new Display();
        setDisplay.luasJajarGenjangDisplay();
        hitungButton.addEventListener("click", calculateeLuasJajarGenjang);
        break;
      default:
        console.log("Default Setting");
        break;
    }
  });
};
magicalCalculatorFunction();
