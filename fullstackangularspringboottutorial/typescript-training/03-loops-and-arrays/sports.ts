let sportsOne:string[] =["Golf","cricket","football"];
for(let i=0;i<sportsOne.length;i++){
    console.log(sportsOne[i]);
}

//lets use simplified for loops
for(let tempSport of sportsOne){
    if(tempSport == "cricket"){
        console.log(tempSport + "<< My Favourite!");
    }
    else{
    console.log(tempSport);
}
}