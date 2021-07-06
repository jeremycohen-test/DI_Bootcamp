let people = ["Greg", "Mary", "Devon", "James"];

let people1 = people.shift();

console.log(people)

people.splice(2,1,"Jason");

people.push("Jeremy");

console.log(people);


for( let i in people) {
    console.log(people[i]);
}

let indexJason = people.indexOf("Jason");

let n=0;


while(indexJason+1>n) {

    console.log(people[n]);
    n++;

}

people1= people.slice(1,3);

console.log(people1);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

let last = people.length;

console.log(last);