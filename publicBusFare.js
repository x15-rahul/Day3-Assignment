const busCapacity = 50;
const microCapacity = 11;

function publicBusFare(numberOfPeople){
    if(numberOfPeople <= 50){
        return 'Bus Fare 0';
    } else {
        const busRemainingPeople = numberOfPeople % 50;
        const microRemainingPeople = busRemainingPeople % 11;
        const busFare = microRemainingPeople * 250
        return busFare;
    }
}

const  busFare = publicBusFare(235);
console.log(busFare);