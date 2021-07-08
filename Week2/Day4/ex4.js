function isDivisible () {

    let a = 0;
    const b =23;

    let c = [];

   while(a<=500) {
       if(a%b == 0) {
           c.push(a);
           a++;
       }
       else {
        a++;
       }
   }
   console.log("Output: "+ c.join(" "));
   let sum = 0;

for (let i = 0; i < c.length; i++) {
    sum += c[i];
}
console.log("Sum: "+sum);
}

isDivisible();