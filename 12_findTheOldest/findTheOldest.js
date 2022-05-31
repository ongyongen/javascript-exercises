const findTheOldest = function(people) {
    let ages = people.map(person => {
        if (person.yearOfDeath != undefined) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return new Date().getFullYear() - person.yearOfBirth;
        }})
    let maxAge = ages.reduce((a,b) => {
        return Math.max(a,b)
    })
    let maxAgeIndex = ages.indexOf(maxAge)
    return people[maxAgeIndex]
}

// Do not edit below this line
module.exports = findTheOldest;
