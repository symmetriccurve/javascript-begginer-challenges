/** Problem Statement 1
 * Write a function to change the year 2013 to 2018  
 * Write a function to change missionDuration from '6 months' to '12 months'
 * Write a single function to change lowest,highest,inclination to 500 km , 76000 km and 200.0 degrees
 * 
 */


/** Problem Statement 2
 * change/mutate the dryMass property 'unit' value from lb to kg 
 * convert 1064lbs into kgs and assign to the mass property of dryMass
 * 
 * Hint: 1kg = 2.20lbs
 * 
 */
 
var satellite = {
  name: 'Mangalyaan',
  year: 2013,
  missionType: 'Mars orbiter',
  isSuccessful: true,
  missionDuration: '6 months',
  launchSite: 'Satish Dhawan Space Centre',
  orbitParameters: {
      lowest: '421.7 km',
      highest: '76,993.6 km',
      inclination: '150.0 degrees'
  },
  instruments: [
      'Atmospheric',
      'Particle environment',
      'Surface imaging'
  ],
  spaceCraftProperties: {
      launchMass: {
          mass: 1337.2,
          unit: 'kg'
      },
      dryMass: {
          mass: 1064,
          unit: 'lb'
      },
  }
}


