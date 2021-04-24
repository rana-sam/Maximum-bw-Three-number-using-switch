let num1,num2,num3;
num1=parseInt(prompt("enter first number"));
num2=parseInt(prompt("enter scond number"));
num3=parseInt(prompt("enter third number"));


function max(num1,num2,num3) {

    switch (true) {
        case (num1>num2)&&(num1>num3):
            return num1; 
            break;
        case (num2>num1)&&(num2>num3):
            return num2; 
            break;
    
        default:
            return num3;
            break;
    }
 
}

let result=max(num1,num2,num3);
console.log("maximum number is " +result);