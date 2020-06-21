//where fish data will be and functions to retrieve that data
const fishes = [  
{ id: 1, 
  image: "images/fish1.jpg",
  species: "Flounder",
  length: "24 inches",
  name: 'Clifford', 
  locationHarvested: "Wisconsin",
  diet: "fish food" 
},
{ id: 2, 
  image: "images/fish2.jpg",
  species: "Salmon",
  length: "29 inches",
  name: 'Stephen', 
  locationHarvested: "New Jersey",
  diet: "fish food" 
},
{ id: 3, 
  image: "images/fish3.jpg",
  species: "Bass",
  length: "27 inches",
  name: 'Winona', 
  locationHarvested: "Florida",
  diet: "fish food" 
},
];

const quotes =  [
  {
    id: 1, 
    quote: "Don't kill the fish",
    saidBy: "Martin"
  },
  {
    id: 2, 
    quote: "I'm the best at loving fish",
    saidBy: "Martin"

  },
  {
    id: 3, 
    quote: "Do you say salmon or salmon?",
    saidBy: "Martin"

  }
]

const locationsVisited = [
  {
    id: 1, 
    name: "Barbados",
    dateVisited: "2017"
  },
  {
    id: 2, 
    name: "Florida",
    dateVisited: "1999"
  },
  {
    id: 3, 
    name: "Alaska",
    dateVisited: "2020"
  }
]

const maintenanceTips = [
  {
    id: 1, 
    name: "Don't put them in cold water when cleaning the tank",
  },
  {
    id: 2, 
    name: "Talk to your fish daily",
  },
  {
    id: 3, 
    name: "Be a little concerned if they start talking back",
  }
]

//fetch call for all fish - do I need that in main js or just in fishList??
const getAllFishes = () => {

}
//fetch call for specific fish with id

//fetch call for fish with multiples of 3
const getFishesMultiplesOf3 = () => {
  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
        console.log(fish)
    }
}
}

//fetch call for fish with multiples of 5
const getFishesMultiplesOf5 = () => {
  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
        console.log(fish)
    }
}
}

//fetch call for not special fish
const getRestOfFish = () => {
  for (const fish of fishes) {
    if (fish.length % 5 !== 0 || ish.length % 3 === 0) {
        console.log(fish)
    }
  }
}

//add a fish to fishes array of objects

//delete a fish from fishes array of objects
export { getAllFishes, getFishesMultiplesOf3, getFishesMultiplesOf5, getRestOfFish }
