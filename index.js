// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name){
    return drivers.filter(function(findDriver) {
        return findDriver.toLowerCase() === name.toLowerCase();
    })
};

function fuzzyMatch(drivers,name){
    const driversLetter = name.length
    return drivers.filter(function(findDriver){
        return findDriver.slice(0,driversLetter) === name
    })
};

function matchName(drivers, key) {
    const result = drivers.filter(function(driver) {
        return driver.name === key})
    return result;
};