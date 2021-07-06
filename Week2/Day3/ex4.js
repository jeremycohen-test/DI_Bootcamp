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

  console.log(indexOfResult);

  // 

  
  if(guestListObjectTitle.indexOf(result) !== -1)  
  {  
          console.log("Hi i'm " + guestListObjectTitle.guestListObjectTitle[indexOfResult] + ", and i'm from " + guestList.[indexOfResult] );
  }   
  else  
  {  
          alert("No, the value is absent.")  
  }  
  

  switch(result) {
    case result == "randy":
      console.log("Hi! I'm " + guestList[0] + ", and i'm from" + guestList.randy[0])
      break;
    case result == "karla":
        console.log("Hi! I'm " + guestListObjectTitle[1] + ", and i'm from" + guestList.randy)
      break;
    default:
      // code block
  }

  let result = prompt("Name please");

  console.log(guestList.getElementsbyClassName);
  console.log(guestList.randy.indexOf(guestList.randy));

