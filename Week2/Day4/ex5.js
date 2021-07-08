let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket() {
    let item = prompt("write an item and check if you got it in your basket !");
    if(item in amazonBasket) {
        console.log(item + " is in the basket");
    }
    else {
        console.log("I'm sorry you don't take it...yet?")
    }
    
    

}

checkBasket();