// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,string) {
    return drivers.filter((drivers)=>{
        if (drivers.toLowerCase()===string.toLowerCase()) {
            return string
        }
    })
}
function fuzzyMatch(drivers,string) {
    return drivers.filter((drivers)=>{
        if (drivers.charAt(0)===string.charAt(0)) {
            return string
        }
    })
}
function matchName(drivers,string) {
    return drivers.filter((drivers)=>{
        if (drivers.name===string) {
            return string
        }
    })
}