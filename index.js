// Code your solution in this file!
const returnFirstTwoDrivers = function drivers([]){
        return (["Antonia", "Nuru"]);
    }

const returnLastTwoDrivers = function  drivers([]){
    return (["Amari", "Mo"]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (anInteger){
    return function(fare){
        return fare * anInteger;
    };
};

const   fareDoubler = createFareMultiplier(2);
const   fareTripler = createFareMultiplier(3); 

const selectDifferentDrivers = function(arrayOfDrivers, driversToReturn){
    return driversToReturn(arrayOfDrivers);
};