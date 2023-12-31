window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {

const initialValues= {
  amount:1000,
  years:1,
  rate:4
}

document.getElementById("loan-amount").value=initialValues.amount
document.getElementById("loan-years").value=initialValues.years
document.getElementById("loan-rate").value=initialValues.rate


update()

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentVals=getCurrentUIValues()
  calculateMonthlyPayment(currentVals)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let p=values.amount
  let n=values.years*12
  let i=values.rate/12/100
  let monthlyPayment= (p*i)/(1-((1+i)**-n))
  let monthlyPaymentUi=monthlyPayment.toFixed(2).toString()
  updateMonthly(monthlyPaymentUi)
  return monthlyPaymentUi

}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
   let payment=document.getElementById('monthly-payment')
   if (payment){
  payment.innerHTML=`$${monthly}`
  return payment
   }
}
