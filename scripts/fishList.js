import fishData from '../dataHelpers/data/fishData.js';
import utils from '../dataHelpers/utils.js';
import Fish from './fish.js'


  /*
          Invoke the specific Fish component function
          and pass the current fish object as an argument.
          Each time, add the return value to the
          domString variable with `+=`
      */

const showHolyFish = () => {
  const holyFish = fishData.getFishesMultiplesOf3()
console.log(holyFish)
  let domString = '';

  domString += '<div class="card">';
  domString += '<div class="card-header">Holy Fish</div>';
  domString += '<ul class="list-group list-group-flush">';
  for (const fish of holyFish) {
      domString += Fish(fish) 
      return domString
  }
 domString += '</ul>';
 domString += '</div>';

utils.printToDomFunction('holyFishList', domString)
}


// Function to show soldier fish in the browser
const showSoldierFish = () => {
  const soldierFish = fishData.getFishesMultiplesOf5();
  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-header">Soldier Fish</div>';
  domString += '<ul class="list-group list-group-flush">';

for(const fish of soldierFish) {
  domString += Fish(fish)
  return domString;
}

  domString += '</ul>';
  domString += '</div>';

  utils.printToDomFunction('soldierFishList', domString)

}

// Function to show common fish in the browser
const showRestOfFish = () => {
  const restOfFish = fishData.getRestOfFish()

  let domString = '';
  domString += '<div class="card">';
  domString += '<div class="card-header">Rest of the  Fish</div>';
  domString += '<ul class="list-group list-group-flush">';

for(const fish of restOfFish) {
  domString += Fish(fish)
  return domString
}
  domString += '</ul>';
  domString += '</div>';

  utils.printToDomFunction('restOfFishList', domString)
}

  
// Invoke all three functions here
const buildFishList = () => {
  showHolyFish();
  //showSoldierFish();
 // showRestOfFish();
  };

  export default { buildFishList }
