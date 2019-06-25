Problem Statement: 

Give a object below print the model,fuelType and count of seats in the front. 


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
