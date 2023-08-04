
describe("Monthly Payment Calculator", () => {
  let testValues;

  beforeEach(() => {
    testValues = {
      amount: 2000,
      years: 2,
      rate: 6,
    };
  });

  it("should correctly calculate the monthly payment", () => {
    // Calculate the expected monthly payment manually
    const expectedMonthlyPayment = 88.64;

    // Calculate the actual monthly payment using the function
    const actualMonthlyPayment = calculateMonthlyPayment(testValues);

    // Check if the actual monthly payment matches the expected result
    expect(actualMonthlyPayment).toBeCloseTo(expectedMonthlyPayment, 2);
  });


});
it("should display the monthly payment as a string with 2 decimal places", () => {
  const testValues = {
    amount: 1000,
    years: 1,
    rate: 4,
  };

  // Calculate the monthly payment using the function
  const monthlyPayment = calculateMonthlyPayment(testValues);

  // Check if the monthly payment is a string with exactly two decimal places
  expect(monthlyPayment.split(".")[1].length).toBe(2);
});
