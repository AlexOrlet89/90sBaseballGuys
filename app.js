// import functions and grab DOM elements
import { guys } from './data.js';
import { renderGuys } from './render-utils.js';
const main = document.querySelector('main');
//we import our guys from data.js and loop them through our renderGuys function and then append the returned div to main. We should give main a flex-row class setup in css
for (let guy of guys) {
    const div = renderGuys(guy);
    main.append(div);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
