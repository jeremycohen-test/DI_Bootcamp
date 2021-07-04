let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

console.log(users.length);

let numberOfUsers = users.length -2 ;


if (users.length == 0){
    console.log("no one is online");
} else if(users.length == 1) {
    console.log(users[0] + " is online");
} else if(users.length == 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else {
    console.log(users[0] + "," + users[1] + " and " + numberOfUsers + " more are online");
}
