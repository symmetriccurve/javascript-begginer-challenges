/*

  Given an object change 
  1. write a function that will change the model the vehicle from 2015 to 2016
  2. write a function that will change the material of the front seat from leather to cloth
  
/*

  var vehicle = {
    model: 2015,
    engineInfo: {
      fuelType: 'Petrol',
      transmission: 'gear',
      fuelCapacity: '20',
      horsePower: '1000cc'
    },
    seatInfo: {
      front: {
        material: 'leather',
        count: 2,
        isHeated: true
      },
      back: {
        material: 'leather',
        count: 3,
        isHeated: false
      },
    }
}


function changeVehicleModel(){
 // code goes here
}

function changeFrontSeatMaterial(){
 // code goes here
}


console.log(vehicle.model) // should print 2016
console.log(vehicle.seatInfo.front.material) // should print cloth
