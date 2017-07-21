
class Factory{
  constructor(){
    this.model = 'Mazda';
    this.location = 'USA';
    this.airbags = true;
    this.abs = true;
    this.warranty = 60000;
    this.massBuild = function(){
      return `Building ${this.quantity} ${this.color} ${this.trim} ${this.model}s`;
    };
    this.customerBuild = function(){
      return `Building one ${this.color} ${this.trim} ${this.model} with the following options: ${this.options}`;

    };
  };
};


class Car extends Factory {
  constructor(options){
    super({warranty: options.warranty});
    this.model = options.model;
    this.doors = options.doors;
    this.color = options.color;
    this.enginetype = options.enginetype;
    this.transmission = options.transmission;
    this.trim = options.trim;
    this.wheelstrim = options.wheelstrim;
    this.audio = options.audio;
    this.seatstrim = options.seatstrim;
    this.moonroof = options.moonroof;
    this.enginesize = 4;
    this.navigation = true;
    this.backupcamera = true;
    this.warranty = 100000;
  }
};


class Sport extends Car {
  constructor(options){
    super({model: options.model});
    this.model = options.model;
    this.trim = options.trim;
    this.transmission = options.transmission;
    this.top = options.top;
    this.color = options.color;
    this.seatstrim = options.seatstrim;
    this.audio = options.audio;
    this.wheelstrim= options.wheelstrim;
    this.moonroof = false;
    this.enginetype = 'gasoline';
    this.convertible = true;
    this.doors = 2;
  }
};


class Truck extends Factory {
  constructor(options){
  super({warranty: options.warranty});
    this.model = options.model;
    this.color = options.color;
    this.enginesize = options.enginesize;
    this.hitch = options.hitch;
    this.bed = options.bed;
    this.navigation = options.navigation;
    this.backupcamera = true;
    this.audio = 'basic';
    this.warranty = 150000;
  }
};

let mazda = new Car({
  model: 'Mazda3',
  color: 'red',
  enginetype: 'hybrid',
  transmission: 'automatic',
  trim: 'Touring',
  wheels: 'base',
  audio: 'premium',
  seats: 'leather',
  moonroof: true
});


console.log(mazda);

console.log(mazda.massBuild(mazda.quantity = 35000));

console.log(mazda.customerBuild(mazda.color = 'yellow', mazda.options = 'weather package, satellite radio, rear spoiler'));


let miataRf = new Sport({
  model: 'Miata-RF',
  trim: 'Grand Touring',
  transmission: 'manual',
  top: 'hard top',
  color: 'red',
  seats: 'leather',
  audio: 'premium',
  wheels: 'premium'
})

console.log(miataRf);

console.log(miataRf.massBuild(miataRf.quantity = 15000));

console.log(miataRf.customerBuild(miataRf.color = 'black', miataRf.options = 'hidden headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control'));


let trailBlazer = new Truck({
  model: 'Trail Blazer',
  color: 'blue',
  trim: 'Sport',
  enginesize: 8,
  hitch: true,
  bed: 'standard',
  navigation: true,
  doors: 2
});

console.log(trailBlazer);

console.log(trailBlazer.massBuild(trailBlazer.quantity = 35000, trailBlazer.trim = 'Sport'));

console.log(trailBlazer.customerBuild(trailBlazer.color = 'red', trailBlazer.options = 'seat warmers, tinted windows, fog lamps'));
