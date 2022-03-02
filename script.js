/**
 * operand1, operand2, operator and operatortype is used to store first number, second number , operation (add, sub, multi, div, pow), and unary operation such as square, square root, fraction 
 * 
 * functions :
 *  currentDisplay() -> to display result or operation perform
 *  digitFunction()   -> to add digit to operand1 or operand2 based to on the operation
 *  controlsFunction2() -> to add valid operator (+,-,*,/,., sign(+/-));
 *  controlsFunction2() -> to perform unary operation by calling evaluateFunction2();
 *  controlsFunction3() -> to perform special operation such as CE, Clear, delete last enter number 
 *                          from operands or operator
 *  evaluateFunction()  -> store the result of operation(+,-,*,/) in operand1 and reset the operand2 , 
 *                          operator , operatorType
 *  evaluateFunction2() -> store the result of unary operation in operand1 and reset the operand2 , 
 *                          operator , operatorType
 *  Notes: Inalid operation gives alert message such two decimal point in single number
 */

let operand1 = ""; 
let operand2 = "";  
let operator = "";
let operatortype ="";




function currentDisplay(){
    document.getElementById("display").innerText = operand1 + operator + operand2 ;
     if(document.getElementById("display").innerText === ''){
         document.getElementById("display").innerText = "0";
     }
}


let start = true;
if(start){
    currentDisplay("");
    start = false;
}

function digitFunction(num){
    console.log("typed", num);
    if(operand1 === "" || operator === ""){
        operand1 = operand1  + num;
        console.log("operand1", operand1);
        currentDisplay();
        return;
    }
    operand2 = operand2 +num;
    // console.log("operand2", operand2);
    currentDisplay();
}
function controlsFunction(operatorInput){
    
    if(operatorInput === 'dec'){
        if(operand2 !== ""){
            if(!operand2.includes('.')){
                operand2 = operand2 + '.';
            }else{
                alert("You cannot add decimal point again");
            }
        }else{
            if(!operand1.includes('.')){
                operand1 = operand1 + '.';
            }else{
                alert("You cannot add decimal point again");
            }
        }
    }
    if(operatorInput === 'neg'){
        if(operand2 !== ""){
            operand2 =  '-' + operand2;
        }else{
            operand1 = '-' + operand1 ;
        }
    }

    if(operator !== '' && operatorInput !== 'neg' && operatorInput !== 'dec' && operand2 !== ''){
        evaluateFunction();
        operand1 = document.getElementById("display").innerText;

    }           
    
    if( operatorInput !== 'neg' && operatorInput !== 'dec' && operator===''){
        operator = operatorInput;
    }else{
        alert("Invalid Operation");
    }
    
    currentDisplay();
    operatortype = "";
}



function controlsFunction2(operatorInput){
    if(operator !== ''){
        evaluateFunction();
    }
    if(operatorInput === "fraction"){
        operatortype = '1/x' ;
    }
    if(operatorInput === "sqre"){
        operatortype = "^2";
    }
    if(operatorInput === "sqrt"){
        operatortype = "sqrt" ;
    }

    evaluateFunction2();
}

function controlsFunction3(operatorInput){
    if(operatorInput === 'CE'){
        if(operand2 !== ""){
            operand2 = "";
        }else if(operator !== ''){
            operator = "";
        }
        else{
            operand1 = ""; 
        }
    }else if(operatorInput === 'C'){
        operand2 ="";
        operand1 = "";
        operator = "";
        operatortype ="";
    }else{
        if(operand2 !== ''){
            operand2 = operand2.substring(0,operand2.length -1);
        }else if(operator !== "" || operatortype !== ""){
            operator = "";
            operatortype = "";
        }else{
            operand1 = operand1.substring(0, operand1.length -1);
        }

    }
    currentDisplay();
}


function evaluateFunction(){

    if(operand1 !== "" && operand2 !== "" && operator !== ""){
        let parseOperand1 = parseFloat(operand1);
        let parseOperand2 = parseFloat(operand2);
        let finalExpression;
        if(operator == '^'){
            finalExpression = Math.pow(operand1, operand2);
        }else{
            finalExpression = eval(parseOperand1 + operator+ parseOperand2);
        }
       
        document.getElementById("display").innerText = finalExpression;

        operand1 =finalExpression;
        operand2 = "";
        operator = "";
        // console.log("final ans " , finalExpression);
        
    }
}
function evaluateFunction2(){
    if(operatortype !== "" && operand1 !== ""){
        let parseOperand1 = parseFloat(operand1);
        let finalExpression;
        if(operatortype === "^2"){
            finalExpression = parseOperand1 * parseOperand1;
            
        }
        if(operatortype === "sqrt"){
            finalExpression = Math.sqrt(parseOperand1);
        }
        if(operatortype === "1/x"){
            finalExpression = 1 / parseOperand1;
        }
        document.getElementById("display").innerText = finalExpression;
        operand1 = finalExpression;
        operatortype = "";
        operand2 = "";
        operator = "";

    }
}
