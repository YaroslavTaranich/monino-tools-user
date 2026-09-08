const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const compiled = ts.transpileModule(fs.readFileSync(`${__dirname}/calculate-price.ts`, 'utf8'), {
  compilerOptions: {module: ts.ModuleKind.CommonJS},
});
const priceModule = {exports: {}};
new Function('exports', compiled.outputText)(priceModule.exports);
const {calculatePrice} = priceModule.exports;

test('existing rental brackets retain their prices at every boundary', () => {
  for (const [days, expected] of [[1, 1000], [2, 1000], [3, 800], [6, 800], [7, 700], [20, 700], [21, 600]]) {
    assert.equal(calculatePrice(1000, days), expected);
  }
});

test('rounding never increases the daily rate for inexpensive accessories', () => {
  for (const base of [0, 50, 90, 100, 150, 200, 350, 1000]) {
    let previous = base;
    for (const days of [1, 3, 7, 21]) {
      const rate = calculatePrice(base, days);
      assert.ok(rate <= previous, `${base}, ${days} days: ${rate} > ${previous}`);
      previous = rate;
    }
  }
});
