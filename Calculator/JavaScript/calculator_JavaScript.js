// creates an object to keep track of values
const Calculator = 
{ 
    
    Display_Value: '0',           // 0 on the screen
    First_Operand: null,        // hold the first operand for any expressions
    Wait_Second_Operand: false, // checks whether or not the second operand has been input     
    operator: null,             // this will hold the operator, 
};

function Input_Digit(digit) // modifies values each time a button is clicked
{ 
    const { Display_Value, Wait_Second_Operand } = Calculator; 
    if (Wait_Second_Operand === true)   // check to see if Wait_Second_Operand is true and set calculator
    {   
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } 
    else // Display_Value if the current value is 0 otherwise it adds onto it
    {
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit; 
    }
}


function Input_Decimal(dot)
{
    
    if (Calculator.Wait_Second_Operand === true) return;

    if (!Calculator.Display_Value.includes(dot)) // if Display_Value does not contain a decimal point 
    {        
        Calculator.Display_Value += dot; // add a decimal point
    } 
}



function Handle_Operator(Next_Operator) 
{
    const { First_Operand, Display_Value, operator } = Calculator
    //when key is pressed, convert the current number displayed on the screen to a number and then store the result in Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    
    if (operator && Calculator.Wait_Second_Operand)   // if an operator already exists and if wait_Second_Operand is true, then updates the operator and exits from the function
    {
        Calculator.operator = Next_Operator;
        return; 
    } 
    if (First_Operand == null) 
    {
        Calculator.First_Operand = Value_of_Input; 
    } 
    else if (operator)                                //checks if an operator already exists
    {
        const Value_Now = First_Operand || 0; 
        
        //if operator exists, property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed
        let result    = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //add a fixed amount of numbers after the decimal
        result    = Number(result).toFixed(9)
        //remove any trailing 0's
        result  = (result * 1).toString()
        Calculator.Display_Value= parseFloat(result);
        Calculator.First_Operand_Value = parseFloat(result); 
         
         
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;

}
const Perform_Calculation =
{ 
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand, 
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand, 
    '+': (First_Operand, Second_Operand) =>  First_Operand + Second_Operand, 
    '-': (First_Operand, Second_Operand) => First_operand - Second_Operand, 
    '=': (First_Operand, Second_Operand) => Second_Operand 
};

function Calculator_Reset() 
{
    Calculator.Display_Value = '0'; 
    Calculator.First_Operand = null; 
    Calculator.Wait_Second_Operand = false, 
    Calculator.operator = null;  
    
}


function Update_Display() //  updates the screen with pisplay_Value
{
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
    
}

Update_Display(); 


// monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener
(
    'click', (event) => 
    {    
        const { target } = event;           // the target variable is an object that represents the clicked element
        console.log(target.value);
        console.log(target.classList);
        if (!target.matches('button'))         // if the element that was clicked on is not a button, exit the function 
        {
            return;
        } 
    
        if  (target.classList.contains('operator')) 
        {

            Handle_Operator(target.value);
            Update_Display();
            return; 
        }

        if (target.classList.contains('decimal')) 
        {
            Input_Decimal(target.value);
            Update_Display();
            return; 
        }

        // ensures that AC clears the numbers from the Calculator 
        if  (target.classList.contains('all-clear')) 
        {
            Calculator_Reset();
            Update_Display();
            return; 
        }
        Input_Digit(target.value);
        Update_Display(); 
    }
)