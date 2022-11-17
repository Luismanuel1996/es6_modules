import Car from "./car.js"

export default class Wishlist {
list = []; 
nextId = 0;

    constructor(){
    this.list = [];     
    this.nextId = 0;
    }

    add(make, model, year){
        const car = new Car(++this.nextId, make, model, year);
        this.list.push(car);
    }

    remove(carid){
        this.list = this.list.filter((car) => {
            return car.id != carid;
        } )
    }
}

