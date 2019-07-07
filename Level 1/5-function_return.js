/** Problem Statement
 * Write a function to check if the mission is Successful, if mission is Successful
 * return true else false  and store it inside a variable 
 * Print the variable value 
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


function isMissionSuccessful(){
    // code here
}

var result = isMissionSuccessful()
console.log(result) // should print true