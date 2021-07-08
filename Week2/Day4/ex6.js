
 let Q = 0.25;
 let D = 0.10;
 let N = 0.05;
 let P = 0.01;

function changeEnough(money,price) {



    if(Q*money[0]+D*money[1]+N*money[2]+P*money[3] >= price) {
    console.log("True" );
    } else {
    console.log("False");
    }
}


changeEnough([0, 0, 20, 5], 0.75);