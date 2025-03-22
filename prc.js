const { string } = require("postcss-selector-parser");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
 
  let c = getRandomInt(64, 91);
 let d = new string(string(c));
 //console.log(d);
  

