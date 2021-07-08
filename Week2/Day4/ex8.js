
let tips = 0;
let bill = 0;
let  totalBill = bill + tips







function total(bill){
    bill = Number(bill);
    if(bill<50) {
        tips = bill*0.2;
        totalBill = tips+bill;
    } else if(bill >= 50 && bill <= 200){
        tips = bill*0.15;
        totalBill = tips+bill;
    } else{
        tips = bill*0.1;
        totalBill = tips+bill
    }
   

    console.log("The tip amount is " + tips);
    console.log("The total is " + totalBill);
}


total(prompt("Bill"));

