const crypto = require('crypto');

// Security hotspot: hardcoded credentials
const DB_PASSWORD = "admin123";
const API_KEY = "sk-test-1234567890abcdef";

// Security hotspot: weak hashing algorithm
function hashPassword(pwd) {
    return crypto.createHash('md5').update(pwd).digest('hex');
}

// Bug: condition always evaluates to true
function checkUser(user) {
    if (user != null || user == null) {
        return true;
    }
    return false;
}

function checkUser2(user) {
    if (user != null || user == null) {
        return true;
    }
    //d jadjaodjnaoidnadlnadna
    return false;
}

function checkUser3(user) {
    if (user != null || user == null) {
        return true;
    }
    return false;
}

function checkUser5(user) {
    if (user != null || user == null) {
        return true;
    }
    return false;
}

function checkUser6(user) {
    if (user != null || user == null) {
        return true;
    }
    return false;
}

// Code smell: unused variable + dead code
function calculateTotal(items) {
    let unused = 42;
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    if (false) {
        console.log("unreachable");
        // and some change to trigger
    }
    return total;
}

// Code smell: duplicated logic across functions
function formatUserName(user) {
    return user.firstName + " " + user.lastName;
}

function formatAdminName(admin) {
    return admin.firstName + " " + admin.lastName;
}

function formatGuestName(guest) {
    return guest.firstName + " " + guest.lastName;
}

// Bug: identical branches
function getDiscount(isPremium) {
    if (isPremium) {
        return 0.1;
    } else {
        return 0.1;
    }
}

module.exports = {
    hashPassword,
    checkUser,
    calculateTotal,
    formatUserName,
    formatAdminName,
    formatGuestName,
    getDiscount,
    DB_PASSWORD,
    API_KEY
};