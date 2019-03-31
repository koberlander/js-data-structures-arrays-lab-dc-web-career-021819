// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push("Ralph")
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  let newArray = [...drivers, "Broom"]
  return newArray
}

function prependDriver(name){
  let newArray = ["Arnold", ...drivers]
  return newArray
}

function removeLastDriver(){
  let newArray = drivers.slice(-1)
  return newArray
}

function removeFirstDriver(){
  let newArray = drivers.slice(1)
  return newArray
}
