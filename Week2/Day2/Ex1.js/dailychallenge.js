// variable de la phrase de recherche
let sentence = "The movie is not that bad, I like it";

// on defini les booleens a la recherche du mot "not"
let wordNot = true;

if(sentence.includes("not")) {
    wordNot=true;
} else {
    wordNot=false;
}

console.log(wordNot);

// on defini le booleen a la recherche du mot "bad"

let wordBad = true;

if(sentence.includes("bad")) {
    wordBad=true;
} else{
    wordBad=false;
}


if(wordNot == true && wordBad == true) {
    // on nettoie la phrase des "," par des " espace ,"

sentence = sentence.replace(",", " ,");

// on parse la string et on la place dans un array

let sentenceSplit = sentence.split(' ');
console.log(sentenceSplit);

// on calcule la position dans le array du mot not

let positionOfWordNot = sentenceSplit.indexOf("not",0);

console.log(positionOfWordNot);

// on calcule la position dans le array du mot bad

let positionOfWordBad = sentenceSplit.indexOf("bad",0);

console.log(positionOfWordBad);

// on supprime les elements entre positionofWordNot et positionOfWordIsBad

let sentenceSplit1 = sentenceSplit.splice(positionOfWordNot,positionOfWordBad-positionOfWordNot+1,"good");

console.log(sentenceSplit.toString());

let clean = sentenceSplit.toString();
let cleanVirgule = /,/gi;
clean = clean.replace(cleanVirgule, " ");

clean = clean.replace("   ", ", ");
console.log(clean);



}

else {
    console.log(sentence);
}