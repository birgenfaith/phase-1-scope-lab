//write your code here

var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}


function setBestCustomer(){
    bestCustomer = 'not bob';    
}


function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'nellie';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
}
changeLeastFavoriteCustomer();
console.log(changeLeastFavoriteCustomer());