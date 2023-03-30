function validPalindrome(string) {
    string = string.replace(/[^A-Za-z0-9]/g, "");
    string = string.toLowerCase();
    for (let i = 0; i < (string.length / 2); i++) {
        if (string.charAt(i) != string.charAt(string.length - 1 - i)) return false;
    }
    return true;
}

console.log(validPalindrome("level"));
console.log(validPalindrome("algorithm"));
console.log(validPalindrome("A man, a plan, a canal: Panama"));