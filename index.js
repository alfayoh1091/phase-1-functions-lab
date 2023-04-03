function distanceFromHqInBlocks(n1){
    var difference = n1 - 42;
    var difference2 = 42 - n1;
    if (n1 > 42 ) {
        return difference;
    } else {
        return difference2;
    }
}
function distanceFromHqInFeet(n1){
    var feetDistance = (n1 - 42) *264;
    var feetDistance1 = (42 - n1) * 264;
    if (n1 > 42 ) {
        return feetDistance;
    } else {
        return feetDistance1;
    }

}
function distanceTravelledInFeet(n1, n2){
    var dis = (n1 - n2) * 264;
    var dis2 = (n2 - n1) * 264;
    if (n1 > n2 ) {
        return dis;
    } else {
        return dis2;
    }
}
function calculatesFarePrice(n7, n8){
    var fare = (n7 - n8) * 0;
    var fare1 = (n7 - n8) * 2;
    var fare2 = 25;
    var fare3 = "cannot travel that far"
    if (400 >= n7 - n8) {
        return fare;
    } else if (2000 >= n7 - n8 > 400){
        return fare1;
    } else if (2500 >= n7 - n8 > 2000) {
        return fare2;
    } else {
        return fare3;
    }

}


