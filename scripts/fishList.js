import fishData from '../dataHelpers/data/fishData';

const showHolyFish = () => {
  const holyFish = fishData.getFishesMultiplesOf3()

  for (const fishObject of holyFish) {
      const fishHTMLRepresentation = fish(fishObject)
      contentTarget.innerHTML += fishHTMLRepresentation
  }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
  const soldierFish = fishData.getFishesMultiplesOf5()

  for (const fishObject of soldierFish) {
      const fishHTMLRepresentation = fish(fishObject)
      contentTarget.innerHTML += fishHTMLRepresentation
  }
}

// Function to show common fish in the browser
const showRestOfFish = () => {
  const restOfFish = fishData.getRestOfFish()

  for (const fishObject of restOfFish) {
      const fishHTMLRepresentation = fish(fishObject)
      contentTarget.innerHTML += fishHTMLRepresentation
  }
}

  
// Invoke all three functions here
const buildFishList = () => {
  showHolyFish();
  showSoldierFish();
  showRestOfFish();
  };

  export { buildFishList }
