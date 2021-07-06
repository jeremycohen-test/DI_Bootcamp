let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }


// afficher les valeur des classes dans un tableau
  let guestListObjectTitle = Object.getOwnPropertyNames(guestList);

  // Afficher le resultat

  console.log(guestListObjectTitle);

  // lancer le prompt
  
  let result = prompt("Name please");

  // initialiser la fonction afin de definir l'index de la valeur prompt

  let indexOfResult = guestListObjectTitle.indexOf(result);

  // console.log(indexOfResult);

  let match = guestList[result];

  // console.log(match);

  if(guestListObjectTitle.indexOf(result) !== -1)  
  {  
          console.log("Hi, i'm "+ result + ", and i'm from " + match); 
  }   
  else  
  {  
          alert("No, the value is absent.")  
  }  