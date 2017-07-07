function vowel(word){

        if(word.match(/[aeiouAEIOU]/))
        {
          return "Yes";
        }
        else {
          return "No";
        }

}
module.exports = vowel;
