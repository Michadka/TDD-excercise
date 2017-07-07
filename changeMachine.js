(function(){

  // let amount = 47;

  function changeMachine(amount){
    let twenty = parseInt(amount / 20);
    console.log("20 = " + twenty);
    let tens = parseInt((amount - (twenty * 20)) / 10);
    console.log("10 = " + tens);
    let fives = parseInt((amount - ((twenty * 20) + (tens * 10))) / 5);
    console.log("5 = " + fives);
    let ones = parseInt(amount - ((twenty * 20) + (tens * 10) + (fives * 5)));
    console.log("1 = " + ones);
    let finalArray = [twenty, tens, fives, ones];
    console.log(finalArray);
    return finalArray
  }

module.exports = changeMachine;
})();
