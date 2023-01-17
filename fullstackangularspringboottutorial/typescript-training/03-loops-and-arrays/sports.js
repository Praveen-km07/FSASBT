var sportsOne = ["Golf", "cricket", "football"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//lets use simplified for loops
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "cricket") {
        console.log(tempSport + "<< My Favourite!");
    }
    else {
        console.log(tempSport);
    }
}
