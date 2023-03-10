const maxProfit = require('./index');

describe('test max-profit', () => {
  it.each([
    [[3,3,5,0,0,3,1,4],6],
    [[1,2,3,4,5], 4],
    [[7,6,4,3,1], 0],
  ])('with %p expecting %p', (prices, max) => {

    expect(maxProfit(prices)).toEqual(max);

  });
});
