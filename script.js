class Factory{
  constructor(make, location, airbags, abs, warranty) {
    this.make = "Mazda";
    this.location = "USA";
    this.airbags = true;
    this.abs = true;
    this.warranty = "60,000 miles / 3 years";

    this.massBuild = function(quantity, options){
    this.quantity = 100;
    this.color = "Black";
    this.model = "Touring CX-5";
    };
    this.customerBuild = function(color, options){
    this.quantity = 1;
    this.color = "Red";
    this.model = "Model-2"
    }
  }
};

  class Car extends Factory {
  constructor(model, doors, color, engineType, transmission, trim, wheelsTrim, audio, seatsTrim, moonRoof) {
    super();
    this.engineSize = 4;
    this.navigation = true;
    this.backupCamera = true;
    this.warranty = "100,000 miles / 5 years";
  }
}

class Sport extends Car {
constructor(model, transmission, trim, wheelsTrim, audio, seatsTrim, top, color) {
  super();
  this.moonroof = false;
  this.enginetype = "gasoline";
  this.convertible = true;
  this.doors = 2;
}
}

class Truck extends Factory {
constructor(model, color, engineSize, hitch, bed, navigation) {
  super();
  this.backupCamera = true;
  this.audio = "basic";
  this.warranty = "150,000 miles / 6 years";
}
}

let mazda = new Car({
  model: "Mazda3",
  color: "Red",
  engine: "Hybrid",
  transmission: "Automatic",
  trim: "Touring",
  wheels: "Base",
  audio: "Premium",
  seats: "Leather",
  moonRoof: true
});


let mazda3 = new Car({
  make: "Mazda",
  location: "USA",
  airbags: true,
  abs: true,
  warranty: "100,00 miles / 5 years"
});

console.log(mazda3);
