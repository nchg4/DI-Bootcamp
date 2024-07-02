function hotelCost(){
    while (true){
    let input = prompt('How many nights would you like to stay in the hotel?:');
    let numNights = parseInt(input);

    if (!isNaN(numNights) && numNights > 0){
        return numNights * 140;
    } else{
        alert('Please enter a valid answer:');
    }
}
}


function planeRideCost(){
    while (true){
    let destination = prompt('Are you going to (London, Paris or other):').trim().toLowerCase();
    // let destination = parseInt(input);

    if (destination === 'london'){
        return 183;
    } else if (destination === 'paris'){
        return 220;
    }else {
        return 300;
        }
    }
}

function rentalCarCost(){
    while (true){
    let input =  prompt('How many days would you like to rent a car for:');
    let carDays = parseInt(input);

    if (!isNaN(carDays) && carDays > 0){
        let cost = carDays * 40
        if (carDays > 10){
            cost *= 0.95;
        }
        return cost;
    } else{ 
        alert('Please enter a valid answer:')
        }
    }
}

function totalVactionCost(){
    let hotelCostTotal = hotelCost();
    let planeRideCostTotal = planeRideCost();
    let rentalCarCostTotal = rentalCarCost();

    let totalCost = hotelCostTotal + planeRideCostTotal + rentalCarCostTotal;

    console.log(`Hotel cost: ${hotelCostTotal}, Plane cost: ${planeRideCostTotal}, Car cost: ${rentalCarCostTotal} `);
    console.log(`Total vacation cost: ${totalCost}`);
}
totalVactionCost();