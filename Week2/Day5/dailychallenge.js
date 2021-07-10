let valueOfBeer = prompt("Enter a value");
let Valueless = 1;



function Sentence (valueOfBeer,Valueless) {
    
   while(valueOfBeer - Valueless > 1 && valueOfBeer-Valueless !=0 && valueOfBeer >= Valueless ){
        valueOfBeer = valueOfBeer - Valueless+1;
        console.log(valueOfBeer + " bootle of beer on the wall" );
        console.log(valueOfBeer + " bootle of beer on the wall" );
        console.log(valueOfBeer + " bootles of beer");
        if(valueOfBeer >= Valueless ){
            console.log("Take " + Valueless + ", pass them around");}

        Valueless++;
    } 



}

function lastSentence (valueOfBeer,Valueless) {
    if(valueOfBeer-Valueless === 1){
        
            console.log(valueOfBeer + " bootle of beer on the wall" );
            console.log(valueOfBeer + " bootle of beer on the wall" );
            console.log(valueOfBeer + " bootles of beer");
            console.log("Take " + Valueless + ", pass it around");
    
    } else {

    
}
}
  



Sentence(valueOfBeer,Valueless);
lastSentence(valueOfBeer,Valueless);


