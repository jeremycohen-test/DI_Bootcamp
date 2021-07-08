function checkNumber () {

    let a = 0;
    const b =2

   while(a<=100) {
       if(a%b == 0) {
           console.log("the number " + a + " is even");
           a++;
       }
       else {
        console.log("the number " + a + " is odd");
        a++;
       }
   }
}

checkNumber();