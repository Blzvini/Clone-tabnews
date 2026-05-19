function somar(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }
  return arg1 + arg2;
}

function multiplicar(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }
  return arg1 * arg2;
}

function dividir(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "Erro";
  }
  if (arg2 === 0) {
    return "Erro";
  }
  return arg1 / arg2;
}

module.exports = {
  somar,
  multiplicar,
  dividir,
};
