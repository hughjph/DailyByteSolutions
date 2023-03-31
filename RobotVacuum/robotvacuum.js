/*
    This function has one single loop making this a simple O(n) time complexity

    The space complexity is O(n) since each movement is stored once
*/
function originalPosition(movements) {
    let xpos = 0;
    let ypos = 0;
    for (let i = 0; i < movements.length; i++) {
        const char = movements.charAt(i);
        if (char == "L") xpos -= 1;
        if (char == "R") xpos += 1;
        if (char == "U") ypos += 1;
        if (char == "D") ypos -= 1;
    }

    if (xpos == 0 && ypos == 0) return true;
    return false;
}

console.log(originalPosition("LR"));
console.log(originalPosition("URURD"));
console.log(originalPosition("RUULLDRD"));