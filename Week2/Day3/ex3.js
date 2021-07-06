let result = prompt("Give me a number under 10");

while (result > 10 && result.typeof != Number) {
    result=prompt("Give me a number under 10");
}
