const myFunctions = require('./basicfunctions.js');

//Div tests
test('Testing whole number div -- success', () => {
  const target = 5;
  const result = myFunctions.div(10, 2);
  expect(target).toBe(result);
});

test('Testing whole number div decimal result -- success', () => {
  const target = 2.5;
  const result = myFunctions.div(10, 4);
  expect(target).toBe(result);
});

test('Testing decimal div -- success', () => {
  const target = 2;
  const result = myFunctions.div(0.1, 0.05);
  expect(target).toBe(result);
});


test('Testing div zero result -- success', () => {
  const target = 0;
  const result = myFunctions.div(0, 1);
  expect(target).toBe(result);
});

test('Testing div with negative numbers -- success', () => {
  const target = -1;
  const result = myFunctions.div(-1, 1);
  expect(target).toBe(result);
});

test('Testing div by zero -- success', () => {
  const target = Infinity;
  const result = myFunctions.div(1, 0);
  expect(target).toBe(result);
});

test('Testing div by zero -- success', () => {
  const target = NaN;
  const result = myFunctions.div("Test", "What does this do");
  expect(target).toBe(result);
});

//Contains Number Test
test('Testing contains number with number -- success', () => {
  const target = true;
  const result = myFunctions.containsNumbers("00");
  expect(target).toBe(result);
});

test('Testing contains number with symbols and numbers -- success', () => {
  const target = true;
  const result = myFunctions.containsNumbers(".o.0-");
  expect(target).toBe(result);
});

test('Testing contains number with letter string -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers("abc");
  expect(target).toBe(result);
});

test('Testing contains number with symbol string -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers("!@#$%^&*(");
  expect(target).toBe(result);
});

test('Testing contains number with symbol string -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers("");
  expect(target).toBe(result);
});

//The bug is tested in this test. Javascript has two different types of 'equals'
//, normal and exact. This function uses normal, which sees 0 and an empty string
//as the same thing. So even though you'd expect this test below to be false, it's 
//true because it sees an empty string as zero. 
test('Testing contains number with symbol string -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers(" ");
  expect(target).toBe(result);
});

