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
