var customerName = "bob";
//function for  the global variable
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
}
var bestCustomer;

// function to declare a varable as a global scope 
function setBestCustomer () {
 bestCustomer = 'not bob';
return bestCustomer;
}

function overwriteBestCustomer () {
  bestCustomer = 'maybe bob';
  return bestCustomer;

}

const leastFavoriteCustomer = "value";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "intial";
}