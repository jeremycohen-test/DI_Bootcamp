    function playTheGame() {
        start = window.confirm("Tu la tentes?");
        computerNumber = Math.floor(Math.random() * 11);

        if(start == false) {
            alert("No problem, Good-bye");
        } else {
            userNumber = prompt("Entrer un chiffre");
        // valeur = parseInt(valeur);
            if(isNaN(userNumber)) {
                alert("Sorry not a number");
                console.log("1");
            } 
                else if(userNumber >= 0 && userNumber <= 10)  {
                Number(userNumber);
                console.log("3");
                test(userNumber,computerNumber);
            }
                else {
                    alert("Sorry it's not a good number, Good-Bye");
                    console.log("2");
            }
        }    
    }

    function test(userNumber,computerNumber) {
        let diff = userNumber-computerNumber
        if(diff === 0) {
            alert("Winner");
        }
        let i = 0;
        while(diff > 0 && i < 3) {
            if(diff >0) {
                alert("Your number is bigger try again");
                userNumber = prompt("Enter a value");
                userNumber= Number(userNumber);
                i++;
                if(diff === 0) {
                    alert("Winner");
                }
            } else if(diff < 0) {
                alert("Your number is lower, try again");
                userNumber = prompt("Enter a value");
                userNumber= Number(userNumber);
                i++;
                if(diff === 0) {
                    alert("Winner");
                }

            }
        }
        if(i === 3 ){
            alert("Game-Over");
        }
    }


    playTheGame();
