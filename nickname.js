function nickname(nickname, name){
  let nnArray = nickname.split("");

  if(nickname.length >= name){
    return false;
  }else{
    let nnArray = nickname.split("");
    let tempLocation = 0;
    let origNameLength = name.length;
    for (let i = 0; i < nnArray.length; i++){
      let tmpIndex = name.indexOf(nnArray[i])//location of the found letter
      //break out if the letter is not in the name
        if (tmpIndex === -1){
          return false;
        }
//move forward in the name until the letter is found
          while (i < tmpIndex){
            tmpIndex = name.indexOf(nnArray[i], tmpIndex + 1);
          }

          let tmpFound = tmpIndex;





      tmpLocation = name.search(nnArray[i]);
      name = name.substring(i)
      console.log("name now equals " + name);
      if(tmpLocation){

      }
    }
  }
}

nickname("Jbe", "Joseph")
