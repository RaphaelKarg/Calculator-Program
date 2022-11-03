let firstNumber;
let secondNumber
let operator;
let error = 0;
let sum, sab, multi, div, rem, sq, cu;

document.getElementById("submit").onclick = function(){

    firstNumber = initFirstNumber();
    secondNumber = initSecondNumber();
    //Operator Input
    operator = document.getElementById("selectOperator").value;

    if(error > 0) {
        return false;
    }
    else{
        switch(operator) {
            case "+":
                sum = summary(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = "The Summary of two numbers is: " + sum;
                break;
            case "-":
                sab = sabtraction(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = "The Sabtraction of two numbers is: " + sab;
                break;
            case "*":
                multi = multilication(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = "The multiplication of two numbers is: " + multi;
                break;
            case "/":
                div = division(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = "The division two of numbers is: " + div;
                console.log(div);
                break;
            case "%":
                rem = remainder(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = "The remainder of two numbers is: " + rem;
                break;
            case "^2":
                sq = power(firstNumber, secondNumber);
                document.getElementById("myResult").innerHTML = `The power of ${firstNumber} is: ` + sq;
                break;
            default:
                document.getElementById("selectError").style.color="white";
                document.getElementById("selectError").innerHTML = "Check your operator!";
                return false;
        }
    }


    /** INITIALIZE THE NUMBERS **/
    function initFirstNumber () {

        //First Number Input
        firstNumber = document.getElementById("firstNumber").value;
        firstNumber = parseFloat(firstNumber);
        //For the first number
        if (isNaN(firstNumber) || firstNumber == null || firstNumber == ""){
            document.getElementById("spanError1").style.color ="red";
            document.getElementById("spanError1").innerHTML = "(*)";
            error++;
        }
        else if (!isNaN(firstNumber)){
            if (firstNumber < 0) {
                document.getElementById("spanError1").style.color ="red";
                document.getElementById("spanError1").innerHTML = "(*)";
                error++;
            }
            else {
                document.getElementById("spanError1").style.color ="green";
                document.getElementById("spanError1").innerHTML = "*";
                error = 0;
                return firstNumber;
            }
        }
    }

    function initSecondNumber() {

        //Second Number Input
        secondNumber = document.getElementById("secondNumber").value;
        secondNumber = parseFloat(secondNumber);

        //For the second number
        if (isNaN(secondNumber) || secondNumber == null || secondNumber == " "){
            document.getElementById("spanError2").style.color ="red";
            document.getElementById("spanError2").innerHTML = "(*)";
            error++;
        }
        else if (!isNaN(secondNumber)){
            if (secondNumber < 0) {
                document.getElementById("spanError2").style.color ="red";
                document.getElementById("spanError2").innerHTML = "(*)";
            }
            else {
                document.getElementById("spanError2").style.color ="green";
                document.getElementById("spanError2").innerHTML = "*";
                error = 0;
                return secondNumber;
            }
        }
    }
    //Summary Function
    function summary(a, b) {
        let sum = 0;
        sum = a+b;
        return sum;
    }
    //Sabtraction Function
    function sabtraction(a, b) {
        let sab = 0
        sab = a-b;
        return sab;
    }
    //Multiplication Function
    function multilication(a, b) {
        let multi = 1
        multi = a*b;
        return multi;
    }
    //Division Function
    function division(a, b) {
        let div = 0;
        div = a/b;
        return div.toFixed(5);
    }
    //Remainder Function
    function remainder(a, b) {
        let rem;
        rem = a%b;
        return rem;
    }
    //Square Function
    function power(a, b) {
        return Math.pow(a, b);
    }
}


    

