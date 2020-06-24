// main loading page - calls on fuctions that retrieve the data
// nav bar with links, fishList, and maintenance List

import fishList from './fishList';
import 'bootstrap';
import '../styles/main.scss';
// the print to dom function is only working for showRestOfFish in fishList.js
// the restOfFishFunction is the only that's not working in fishData.js

const init = () => {
  fishList.buildFishList();
};

init();
