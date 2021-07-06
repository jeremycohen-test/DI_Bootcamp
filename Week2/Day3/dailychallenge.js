let star = "*";
let star2 = "*";

let i = 0;
let j= 0;



//1 loop
while(i<10){
    console.log(star);
    star = star + star2;
    i++;
}

// 2 loops
while(i<10) {
    while(j<10){
        console.log(star);
    star = star + star2;
    i++;
    j++;

    }
}




