const {expect} = require('chai');
const cartesianProduct = require('./cartesianProduct');

describe('cartesianProduct', () => {
  it('should return set from multiple set', () => {
    const testData = [
      [1, 2, 3],
      [4, 5],
      [6, 7]
    ];
    const expectedLength = 3 * 2 * 2;
    const expectedData = sortResults([
      [1, 4, 6],
      [1, 4, 7],
      [1, 5, 6],
      [1, 5, 7],

      [2, 4, 6],
      [2, 4, 7],
      [2, 5, 6],
      [2, 5, 7],

      [3, 4, 6],
      [3, 4, 7],
      [3, 5, 6],
      [3, 5, 7]
    ]);

    const result = sortResults(cartesianProduct(...testData));

    expect(result).to.be.an('array').and.have.lengthOf(expectedLength);
    expect(result).to.be.deep.equal(expectedData);
  });

  it('should return set from single set', () => {
    const testData = [
      [1, 2, 3]
    ];
    const expectedLength = 3;
    const expectedData = [
      [1],
      [2],
      [3]
    ];

    const result = cartesianProduct(...testData);

    expect(result).to.be.an('array').and.have.lengthOf(expectedLength);
    expect(result).to.be.deep.equal(expectedData);
  });

  it('should return empty set from empty set', () => {
    const testData = [
    ];
    const expectedLength = 1;
    const expectedData = [
      []
    ];

    const result = cartesianProduct(...testData);

    expect(result).to.be.an('array').and.have.lengthOf(expectedLength);
    expect(result).to.be.deep.equal(expectedData);
  });
});

function sortResults(results) {
  results.forEach(r => r.sort((a, b) => a - b));
  return results.sort((a, b) => a.reduce((s, i) => s * i, 1) - b.reduce((s, i) => s * i, 1) );
}
