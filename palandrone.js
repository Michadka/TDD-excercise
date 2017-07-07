(function() {

        function palandrone(word){

            let myArray = [word]; //turn entered word into array
            let myArraySplit = myArray[0].split(""); //split array into individual letters
            let myArrayNormal = myArray[0].split(""); //needed because of next line
            let myArrayReverse = myArraySplit.reverse(); //reverse the individual letters also reversed the original array
            let attempt = myArrayNormal.join(); //create a string
            let attemptReverse = myArrayReverse.join();//create a string
            let result = ""

        //compare the two strings
            return (attempt.toUpperCase() === attemptReverse.toUpperCase())

            }

module.exports = palandrone;

})();
