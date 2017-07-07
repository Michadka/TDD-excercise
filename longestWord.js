function longestWord(str) {

  var strSplit = str.split(' ');
  var longestWordLength = 0;
  var longestWord = ""
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordLength){
	     longestWord = strSplit[i];
       longestWordLength = strSplit[i].length;
     }
  }
       return longestWord;
}
module.exports = longestWord;
