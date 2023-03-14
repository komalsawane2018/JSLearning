

const car = {
    carName    : "Creta SX",
    company    : "Hundai",
    launchYear : 2017
 
}
const carEngine = {
    enginePower : "1499CC",
    maxPower    :"113 BHP"
}
console.log(`================Merged two object using Object.assign() Method===================`);
const assignOperator = Object.assign({}, car, carEngine);
console.log(`Car Name : ${assignOperator.carName}, Company : ${assignOperator.company}, Launch Year : ${assignOperator.launchYear},
Engine Power: ${assignOperator.enginePower} Max Power : ${assignOperator.maxPower}`);

console.log(`================Merged two object using Spread Operator{...} Method===================`);

const spreadOperator = {...car,...carEngine}
    company    : "Hundai",
console.log(`Car Name : ${spreadOperator.carName}, Company : ${spreadOperator.company}, Launch Year : ${spreadOperator.launchYear},
Engine Power: ${spreadOperator.enginePower} Max Power : ${spreadOperator.maxPower}`);

console.log(`================Merged two object using JSON.paras Method===================`);

const newObject = JSON.parse(JSON.stringify(carEngine));
console.table(newObject);