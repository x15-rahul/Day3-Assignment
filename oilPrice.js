const dieselPrice = 114;
const petrolPrice = 130;
const octanePrice = 135;

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    const totalDieselPrice = dieselPrice * dieselQuantity;
    const totalPetrolPrice = petrolPrice * petrolQuantity;
    const totalOctanePrice = octanePrice * octaneQuantity;

    const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalOilPrice;
}

const totalOilPrice = oilPrice(30, 20, 10);
console.log(totalOilPrice);