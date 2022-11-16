function palindrome(str) {
   str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    
    strInvert=str.reverse();
    if(str==strInvert){
      return true;
    }
}

/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*\
