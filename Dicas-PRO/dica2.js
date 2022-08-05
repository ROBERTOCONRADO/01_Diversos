const person = {name: 'Roberto '};
const skillsLevel = { frontEnd: 9, backEnd: 8, softSkills: 10}

'Evite fazer'
person.frontEnd = skillsLevel.frontEnd
person.backEnd = skillsLevel.backEnd
person.softSkills = skillsLevel.softSkills


'spread operator'
const Roberto = { ...person, ... skillsLevel }

//alterar valores
const robertoNewSkills = { ...Roberto, backEnd: 7}
console.log(Roberto)


let squaMembers = ['roberto', 'aline', 'michael'];

// 'evite fazer'
// squaMembers.push('paulo')
// squaMembers.push('maciel')
// squaMembers.push('marcos')


'Jeito PRO'
squaMembers = [...squaMembers, 'paulo', 'marcela', 'paloma']//add final
squaMembers = ['clara', ...squaMembers, 'lucia', 'marcela', 'pietro']//add entre
console.log(squaMembers)

