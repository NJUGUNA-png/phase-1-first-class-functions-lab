// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

console.log(returnFirstTwoDrivers(['Njoroge', 'Kamau', 'Kariuki', 'Kamande']));

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(['Njoroge', 'Kamau', 'Kariuki', 'Kamande']));


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(value){
        return value * multiplier;
    }
}

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

const selectDifferentDrivers = function(drivers, thoseDeres){
    return thoseDeres(drivers);
}
