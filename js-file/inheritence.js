class Vehicle {
    constructor(name, price){
        this.name =name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na re')
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice){
        super(name, price);//vehicle theke paiche tai super
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle{
    constructor (name, price, load){
        super(name, price);
        this.load = load;
    }
}

let car = new Vehicle('Toyota', 15000000);
console.log(car);
car.move();
let bus = new Bus (car.name, car.price, 32, 20);
console.log(bus)