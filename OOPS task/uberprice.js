class uber{
    constructor(distance, priceperkm){
        this.distance = distance;
        this.ppk = priceperkm;
    }
    fair(){
        console.log(this.distance*this.ppk);
    }
}

const firstRide = new uber(12, 5);
firstRide.fair();