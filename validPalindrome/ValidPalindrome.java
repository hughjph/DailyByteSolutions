package validPalindrome;

class ValidPalindrome{
    public static void main(String args[]) {
        System.out.println(validPalindrome("level"));
        System.out.println(validPalindrome("algorithm"));
        System.out.println(validPalindrome("A man, a plan, a canal: Panama"));
        
    }
    
    /* 
     * This algorithm loops on numerous occasions
     * 1. In string replace it loops through each letter and checks against the valid characters
     * 2. In String.toLowerCase() it loops through each letter and replaces it with its lower case counterpart
     * 3. In the algorithm it loops through half of the string and checks each character against the other half
     * 
     * Since each of these steps is O(n) the final Time complexity is O(n)
     * 
     * The string is copied once into a char array so the space complexity is O(n)
    */
    static boolean validPalindrome(String string) {
        string = string.replaceAll(
          "[^a-zA-Z0-9]", "");
        string = string.toLowerCase();
    
        char[] letters = string.toCharArray();

        for (int i = 0; i < Math.floor(letters.length/2); i++) {
            if (letters[i] != letters[letters.length-i-1]) {
                return false;
            }
        }
        return true;
    }


}