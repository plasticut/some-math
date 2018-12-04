module.exports = cartesianProduct;

function cartesianProduct(...args) {
  const size = args.map(a => a.length).reduce((s, l) => s * l, 1);
  const results = [];
  const len = args.length;

  for (let index = 0; index < size; index++) {
    const result = [];

    for (let i = 0, n = index; i < len; i++) {
      const l = args[i].length;
      const j = n % l;
      result.push(args[i][j]);
      n = (n - j) / l;
    }

    results.push(result);
  }

  return results;
}
