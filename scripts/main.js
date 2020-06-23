//main loading page - calls on fuctions that retrieve the data
//nav bar with links, fishList, and maintenance List
import fishList from './fishList.js'
import utils from '../dataHelpers/utils.js'



const init = () => {
fishList.buildFishList(); 
}
 
init();
