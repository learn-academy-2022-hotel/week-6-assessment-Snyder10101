// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { getUnpackedSettings } = require("htt/

// const { number } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

//const { string } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe ('occupationType', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their name capitalized.', () => {
    expect(occupationType(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
const occupationType = (object) => {
  let array = []
for (const person of object){
// creating a for statment realting to the elements in the function people
let job = person.occupation
let name = person.name
// split the words 
let Split = name.split(" ")
// index of 0 to uppercase getting the first letter of both words
let upCase = Split[0][0].toUpperCase()
let wholeWord = Split[0].substring(1)
let upCase2 = Split[1][0].toUpperCase()
let wholeWord2 = Split[1].substring(1)
// variables for string interpolation
let firstName = (upCase + wholeWord)
let lastName = (upCase2 + wholeWord2)
array.push(`${firstName} ${lastName} is ${job}.`)
// finish the statment with string interpolation 
  }
  return array
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('divBy', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.', () => {
    expect(divBy(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divBy(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.
const divBy = (arr) => {
  // we use the filter method to return just numbers
  filteredArr = arr.filter(Element => typeof(Element) === 'number') 
  // were gonna map through the numbers and div by 3
  return filteredArr.map((Number) => Number % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe('cubeNum', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed.', () => {
    expect(cubeNum(cubeAndSum1)).toEqual(99)
    expect(cubeNum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
const cubeNum = (arr) => {
  // i is gonna be our base value reuseable
let i = 0
  // were going to map the arr take the value and push it into the base value itrate through the arr and sum the value cubed
let cubed2 = arr.map(value => i += value**3)
  // return i for big W
return i 
}