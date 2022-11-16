function palindrome(str) {
   str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    
    strInvert=str.reverse();
    if(str==strInvert){
      return true;
    }

    

}
