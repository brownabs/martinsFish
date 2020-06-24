// where fish data will be and functions to retrieve that data
const fishes = [
  {
    id: 1,
    image: 'images/fish1.jpg',
    species: 'Flounder',
    length: '9 inches',
    name: 'Clifford',
    locationHarvested: 'Wisconsin',
    diet: 'fish food',
  },
  {
    id: 2,
    image: 'images/fish2.jpg',
    species: 'Salmon',
    length: '25 inches',
    name: 'Stephen',
    locationHarvested: 'New Jersey',
    diet: 'fish food',
  },
  {
    id: 3,
    image: 'images/fish3.jpg',
    species: 'Bass',
    length: '19 inches',
    name: 'Winona',
    locationHarvested: 'Florida',
    diet: 'fish food',
  },
  {
    id: 4,
    image: 'images/fish3.jpg',
    species: 'Beta',
    length: '18 inches',
    name: 'Rupert',
    locationHarvested: 'Florida',
    diet: 'fish food',
  },
];
/*
const quotes = [
  {
    id: 1,
    quote: "Don't kill the fish",
    saidBy: "Martin",
  },
  {
    id: 2,
    quote: "I'm the best at loving fish",
    saidBy: "Martin",
  },
  {
    id: 3,
    quote: "Do you say salmon or salmon?",
    saidBy: "Martin",
  },
];

const locationsVisited = [
  {
    id: 1,
    name: "Barbados",
    dateVisited: "2017",
  },
  {
    id: 2,
    name: "Florida",
    dateVisited: "1999",
  },
  {
    id: 3,
    name: "Alaska",
    dateVisited: "2020",
  },
];

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
  },
];

*/

// function for fish with multiples of 3

const getFishesMultiplesOf3 = () => {
  const holyFish = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const fish of fishes) {
    // eslint-disable-next-line prefer-destructuring
    const firstValue = fish.length.split('')[0];
    const number = parseInt(firstValue, 10);
    if (number % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish;
};

// function for fish with multiples of 5
const getFishesMultiplesOf5 = () => {
  const soldierFish = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const fish of fishes) {
    const firstValue = fish.length.split('')[0];
    const number = parseInt(firstValue, 10);
    if (number % 5 === 0) {
      soldierFish.push(fish);
    }
  }
  return soldierFish;
};

// function for not special fish
const getRestOfFish = () => {
  const restOfFish = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const fish of fishes) {
    const firstValue = fish.length.split('')[0];
    const number = parseInt(firstValue, 10);
    if (number % 5 !== 0 && number % 3 !== 0) {
      restOfFish.push(fish);
    }
    // is this why it was working and not the other two functions - return statement here - return restOfFish;
  }
  return restOfFish;
};

export default {
  getFishesMultiplesOf3,
  getFishesMultiplesOf5,
  getRestOfFish,
};
