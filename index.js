var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer() {
    if (setBestCustomer) {
        bestCustomer = 'not bob'
    }
    return bestCustomer
}

function overwriteBestCustomer() {
    if (overwriteBestCustomer) {
        bestCustomer = 'maybe bob'
    }
    return bestCustomer
}

const leastFavoriteCustomer = 'brent'

function changeLeastFavoriteCustomer() {
    if (changeLeastFavoriteCustomer) {
        leastFavoriteCustomer = 'donnie'
    }
    return leastFavoriteCustomer
}