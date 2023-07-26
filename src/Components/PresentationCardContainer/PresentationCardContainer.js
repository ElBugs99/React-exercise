import PresentationCard from "../HomeUi/PresentationCard/PresentationCard";
import "./presentationCardContainer.css";
import Cart from "../UI/Cart/Cart";
import { useState } from "react";

const PresentationCardContainer = () => {
  /* fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data));
 */
  const [state, setState] = useState(0);

  const update = quantity => setState(state + quantity);

  /*  const updateCart = (quantity) =>  setState(state + quantity); */

  /* const onClick = () => {
    setState(state + quantity);
    setQuantity(0);
  } */

  return (
    <div className="presentation-container">
      Subjects
      <Cart state={state} />
      <PresentationCard
        name="Nintendo Switch"
        updateCart={update}
      />
      <PresentationCard
        name="PlayStation 5"
        /* onClick={onClick} */ updateCart={update}
      />
      <PresentationCard
        name="Oculus Quest 2"
        /* onClick={onClick} */ updateCart={update}
      />
    </div>
  );
};

/* function stringParse(string){
    //your code here
    let count = {};
    let expanded = [...string];
    
    for ( let key in expanded){
      let letter = expanded[key];
      console.log(`letter: ${letter}`);
      count[letter] ? count[letter] += 1 : count[letter] = 1;
    }
    console.log(count)
    console.log('----------------------')
  } */

function stringParsel(string) {
  //your code here
  const str = [...string];
  let repeatedDigit = "";
  let lastDigit = str[0];

  for (let i = 0; i < str.length; i++) {
    let currentDigit = str[i];
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
      if (currentDigit == lastDigit && currentDigit != repeatedDigit) {
        counter += 1;
        lastDigit = currentDigit; //no
        console.log(`digit ${currentDigit} appears ${counter} times`);

        if (counter == 3) {
          //agregar primer corchete
          console.log(`digit ${currentDigit} appears 3 times`);

          if (counter >= 3 && currentDigit !== str[i + 1])
            //agregar segundo corchete
            console.log(
              `digit ${currentDigit} appears ${counter} times and is diferent from next digit ${
                str[i + 1]
              }`
            );
          repeatedDigit = currentDigit;
        }
        console.log(`letter ${currentDigit} appears ${counter} in a row `);
      } else {
        break;
      }
    }
    console.log("---------------------------------------");
  }
}

function stringParse(string) {
  //your code here
  const str = [...string];
  let lastCharacter = ""; //

  for (let i = 0; i < str.length; i++) {
    let currentCharacter = str[i];
    let counter = 0;
    let pos1 = 0;
    let pos2 = 0;
    console.log(currentCharacter);

    if (currentCharacter !== lastCharacter) {
      lastCharacter = currentCharacter;
      console.log("current character: " + currentCharacter);
      for (let i = 0; i < str.length; i++) {
        if (currentCharacter == str[i - 1]) {
          counter += 1;
          if (counter === 3) {
            //add bracket
            console.log(`counter = ${counter} add first bracket`);
            pos1 = i;
            str.splice(pos1 - 1, 0, "[");
          } else if (counter >= 3 && currentCharacter !== str[i + 1]) {
            //add second bracket
            console.log(`counter = ${counter} add second bracket`);
            pos2 = i;
            str.splice(pos2 - 1, 0, "]");
            break;
          }
        }
      }
      //
    }
    console.log(`${currentCharacter} appears ${counter} times in a row`);
  }
}

export default PresentationCardContainer;
