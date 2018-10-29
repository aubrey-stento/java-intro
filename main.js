let Aubrey = {
  name: "Aubrey",
  age: 25,
  male: false,
  pet: [{ name: "Wesley", type: "dog" }]
}
let Andrew = {
  name: "Andrew",
  age: 54,
  male: true
}
let Laura = {
  name: "Laura",
  age: 54,
  male: false,
  friends: [Andrew]
}
let Sydney = {
  name: "Sydney",
  age: 21,
  male: false
}
let Dylan = {
  name: "Dylan",
  age: 24,
  male: true,
  friends: [Aubrey, Sydney]
}
let humans = [Aubrey, Andrew, Laura, Sydney, Dylan]
humans[2].friends.push(humans[4])

let story1 = `my name is ${humans[0].name} and my age is ${humans[0].age}`
let story2 = `my name is ${humans[0].name} and I have a dog named ${humans[0].pet[0].name}`

console.log(story2)
console.log(humans[2].friends[1].name)
console.log(story1)
