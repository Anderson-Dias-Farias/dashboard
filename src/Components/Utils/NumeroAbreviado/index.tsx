export const NumeroAbreviado = (n: number) => {
  let N = n.toLocaleString("pt-BR");
  let NFloat = parseFloat(N.slice(0, 6)).toFixed(2);
  if (N.length <= 10) {
    return NFloat + "mi";
  } else if (N.length <= 14) {
    return NFloat + "mil";
  } else if (N.length <= 18) {
    return NFloat + "bil";
  } else if (N.length <= 22) {
    return NFloat + "tri";
  } else {
    return NaN;
  }
};
