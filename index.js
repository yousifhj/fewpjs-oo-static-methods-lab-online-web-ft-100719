class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 static sanitize(string) {
  return string.replace( /[^A-Za-z0-9 '-]/g, '' );

 }

 static titleize(str) {
  let strArray = str.split(' ');
  let rejectedWords = ['a','the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  let newStr = [];

  for(const word of strArray) {
    if (strArray[0] == word) {
      newStr.push(this.capitalize(word));
    }else if(rejectedWords.includes(word)) {
      newStr.push(word);
    }else {
      newStr.push(this.capitalize(word));
    }
  }

    return newStr.join(' ');
} 
 

}
