// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//Dichiarazioni
let playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", startGame);

function startGame() {
  //Per ogni numero genero una casella
  const grid = document.querySelector(".grid");
  // reset contenuto precedente
  grid.innerHTML = "";
  //Difficoltà
  const level = parseInt(document.getElementById("select").value);
  let cellNumber;
  switch (level) {
    case 1:
      cellNumber = 100;
      break;
    case 2:
      cellNumber = 81;
      break;
    case 3:
      cellNumber = 49;
      break;
  }
  console.log(cellNumber);

  for (let i = 1; i <= cellNumber; i++) {
    const currentNumber = i;
    let newItem = generateGrid(currentNumber);
    newItem.addEventListener("click", clickChoice);
    grid.append(newItem);
  }

  const bomb = generateNumber(16, cellNumber)
  console.log(bomb);
  const maxClick = cellNumber - 15;
  console.log(maxClick); 

//Funzione click sulla cella
  function clickChoice() {
    const clickedNumber = parseInt(this.textContent);
    const numeberClickedArrey = [];
    if (bomb.includes(clickedNumber)) { //Se il numero è nell' arrey delle bombe 
       this.classList.add("red");//Coloro di rosso la cella
       console.log("BOMBA, Hai perso riprova di nuovo");
     } else {
       if (!bomb.includes(clickedNumber)) { //Se il numero non appartiene all'arrey delle bombe 
        this.classList.add("blue");//Coloro di blu la cela
        numeberClickedArrey.push(clickedNumber);//Pusho il numero cliccato nell'arrey dei numeri selezionti
        console.log(numeberClickedArrey);
       }
     }
  }
}

//FUNCTION

//Function DOM
function generateGrid(text) {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.innerHTML = text;
  return newBox;
}





function generateNumber(numberQuantity, maxNumber) {
  const number = [];
  while (number.length < numberQuantity) {
    const rdnNumbers = getRndInteger(1, maxNumber);
    if (!number.includes(rdnNumbers)) {
      number.push(rdnNumbers)
    }
  }
  return number;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}