(function(){


    function rabbits(start,rate, weeks) {
      let one = parseInt(start);
      let two = parseInt(rate);
      let timesToRun = parseInt(weeks);
      let newVar = 1 + (two/100);
      let newLook = parseInt(one) * Math.pow(newVar,timesToRun);

      return Math.round(newLook);

  };
module.exports = rabbits;
})();
