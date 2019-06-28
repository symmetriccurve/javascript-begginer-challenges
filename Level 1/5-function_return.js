/** Problem Statement
 * Write a function to check if the launch year is 
 * 1. prints the year of launch of vehicle
 * 2. prints missionType
 * 3. prints highest orbit point.
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

function printYearOfLaunch(){
    // your code goes here
}

function printMissionType(){
    // your code goes here
}

function printHighestOrbitPoint(){
    // your code goes here
}

printYearOfLaunch() // should print 2015
printMissionType() // should print Mars orbiter
printHighestOrbitPoint() // should print 76,993.6 km