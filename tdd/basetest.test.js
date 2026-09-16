//Overall, I had a good TDD experience in this assignment.
// For the most part, I was able to implement the red/green/refactor
//practices for all the parts. My biggest challenge, however, was with
// just writing test cases. I oftentimes copy/pase my tests
// (for example, I reused a lot of code that I wrote 
// in the buy tests in the sell tests), 
//and forget to change the wording to match the new function.
//So, when I'd run my tests, they'd often fail and I'd have to
//Go back and fix them. However, despite this issue, I feel like 
// writing tests in the TDD way was beneficial, and I learned 
// a lot from it. 



const myFunctions = require('./base.js');

//Functionality 2.1: creating a stocck portfolio
test('Testing stock portfolio creation -- success', () => {
  const result = myFunctions.createPortfolio();
  expect(result).toEqual(new Map());
});

//Functionality 2.2: checking if stock portfolio is empty
test('Testing if empty portfolio is marked as empty -- success', () => {
  const target = true;
  emptyPortfolio=new Map();
  const result = myFunctions.checkisEmpty(emptyPortfolio);
  expect(target).toBe(result);
});

test('Testing if nonempty portfolio is marked as not empty -- success', () => {
  const target = false;
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 10);
  const result = myFunctions.checkisEmpty(nonemptyPortfolio);
  expect(target).toBe(result);
});

//2.3 Make a purchase
test('Testing purchase on existing ticker -- success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 10);
  targetPortfolio=new Map();
  targetPortfolio.set("AAPL", 20);
  const target = targetPortfolio;
  const result = myFunctions.makePurchase(nonemptyPortfolio, "AAPL", 10);
  expect(target).toEqual(result);
});

test('Testing purchase on nonexistent ticker -- success', () => {
  emptyPortfolio=new Map();
  targetPortfolio=new Map();
  targetPortfolio.set("AAPL", 10);
  const target = targetPortfolio;
  const result = myFunctions.makePurchase(emptyPortfolio, "AAPL", 10);
  expect(target).toEqual(result);
});

test('Testing purchase on nonexistent ticker -- success', () => {
  emptyPortfolio=new Map();
  const target = -1;
  const result = myFunctions.makePurchase(emptyPortfolio, "AAPL", -100);
  expect(target).toEqual(result);
});

//2.4 Making a Sale
test('Testing sale on existing ticker -- success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 20);
  targetPortfolio=new Map();
  targetPortfolio.set("AAPL", 10);
  const target = targetPortfolio;
  const result = myFunctions.makeSale(nonemptyPortfolio, "AAPL", 10);
  expect(target).toEqual(result);
});

test('Testing sale on nonexistent ticker -- success', () => {
  emptyPortfolio=new Map();
  const target = emptyPortfolio;
  const result = myFunctions.makeSale(emptyPortfolio, "AAPL", 10);
  expect(target).toEqual(result);
});


//2.5 how many tickers
test('Testing empty portfolio ticekrs -- success', () => {
  emptyPortfolio=new Map();
  const target = 0;
  const result = myFunctions.countTickers(emptyPortfolio);
  expect(target).toEqual(result);
});

test('Testing nonempty portfolio ticekrs -- success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 20);
  const target = 1;
  const result = myFunctions.countTickers(nonemptyPortfolio);
  expect(target).toEqual(result);
});

//2.6 remove zeroed shares
test('Testing removal of a zero value (added in the sale function) -- success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 20);
  const target = new Map();
  const result = myFunctions.makeSale(nonemptyPortfolio, "AAPL", 20);
  expect(target).toEqual(result);
});

test('Verificaiton of a nonremoval of a nonzero value--success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 20);
  targetPortfolio=new Map();
  const target = targetPortfolio.set("AAPL", 10);
  const result = myFunctions.makeSale(nonemptyPortfolio, "AAPL", 10);
  expect(target).toEqual(result);
});

//2.7 How many shares of each object? 
test('Testing nonzero number of shares -- success', () => {
  nonemptyPortfolio=new Map();
  nonemptyPortfolio.set("AAPL", 20);
  const target = 20;
  const result = myFunctions.countShares(nonemptyPortfolio, "AAPL");
  expect(target).toEqual(result);
});

test('Testing zero number of shares -- success', () => {
  emptyPortfolio=new Map();
  const target = 0;
  const result = myFunctions.countShares(emptyPortfolio, "AAPL");
  expect(target).toEqual(result);
});

//2.8 Selling more than you have
test('Testing sale of too much -- success', () => {

    nonemptyPortfolio = new Map();
    nonemptyPortfolio.set("AAPL", 20);

    expect(() => myFunctions.makeSale(nonemptyPortfolio, "AAPL", 100)).toThrow();

});