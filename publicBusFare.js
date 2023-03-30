const totalPeople = 117;
const busCapacity = 50;
const microCapacity = 11;

function publicBusFare(numberOfPeople){
    if(numberOfPeople <= 50 || numberOfPeople%50 == 0 || numberOfPeople%61 == 0){
        console.log('public bus fare:', 0);
    } else if(numberOfPeople > 50 && ((numberOfPeople-50) < 11 || (numberOfPeople - 50) > 11)){
        let busFare = (numberOfPeople - 50) * 250;
        console.log(busFare);
    }
    
}

publicBusFare(112);