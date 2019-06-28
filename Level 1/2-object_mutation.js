/** Problem Statement
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


