let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(var key in statistics) {
    let prop = statistics[key];

    if(key[0] == 'r' || prop % 2 == 1) {
        console.log(prop);
    }
}