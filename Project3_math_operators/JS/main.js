// Global Variables o increment and decrement functions
var i=0;
var d=9999;
// Secction of Functions
function Add()                                                        // Define Addition function
{           
    var result=2+3;    
    document.getElementById("Add").innerHTML=" 2+3 = "+result;                                                        
}
function Sub()                                                        // Define Subtraction function
{           
    var result=5-2;    
    document.getElementById("Sub").innerHTML=" 5-2 = "+result;                                                        
}
function Mul()                                                        // Define Multiplication function                                        
{           
    var result=6*8;    
    document.getElementById("Mul").innerHTML=" 6*8 = "+result;                                                        
}
function Div()                                                        // Define Divition function                                        
{           
    var result=48/6;    
    document.getElementById("Div").innerHTML=" 48/6 = "+result;                                                        
}
function All()                                                          // Define Addition Subtraction Multiplication and Divition function                                     
{           
    var result=(1+2)*10/2-5;    
    document.getElementById("All").innerHTML=" (1+2)*10/2-5 = "+result;                                                        
}
function Mod()                                                        // Define Modulus function
{           
    var result=25%6;    
    document.getElementById("Mod").innerHTML=" When you divide 15 by 6 you have a remainder of: "+result;                                                        
}
function Neg()                                                        // Define Negation function                                        
{           
    var result=10;    
    document.getElementById("Neg").innerHTML=-result;                                                        
}
function Inc()                                                        // Define Increment function with global variables to increment each mouseenter event                                         
{           
    i++;    
    document.getElementById("Inc").innerHTML=i + " Increments  (Hover me)";                                                        
}
function Dec()                                                      // Define Decrement function with global variables to decrement each mouseenter event                                        
{           
    d--;    
    document.getElementById("Dec").innerHTML=`${d} Decremets Counter (Hover me, start at 9999)`;                                                        
}
function Ran()                                                      // Define Random function                                                                                 
{                  
    document.getElementById("Ran").innerHTML= Math.trunc((Math.random()*100));    // Math object with  trunc and random methods                                                     
}
function Eul()                                                      // Define Euler function
{           
       
    document.getElementById("Eul").innerHTML=Math.E;                // Euler Constant from Math Object
}
function Text_Reset()                                               // Reset the labels 
{               
    document.getElementById("Add").innerHTML="Addition (Hover me)";
    document.getElementById("Sub").innerHTML="Subtraction (Hover me)";
    document.getElementById("Div").innerHTML="Division (Hover me)";
    document.getElementById("Mul").innerHTML="Multiplication (Hover me)";
    document.getElementById("All").innerHTML="Several (Hover me)";
    document.getElementById("Mod").innerHTML="Modulus (Hover me)";
    document.getElementById("Neg").innerHTML="Negation (Hover me)";
    document.getElementById("Inc").innerHTML=i + " Increments (Hover me)";
    document.getElementById("Dec").innerHTML=d+ " Decremets Counter (Hover me, start at 9999)";
    document.getElementById("Ran").innerHTML="Random (Hover me)";
    document.getElementById("Eul").innerHTML="Euler number by Math.E (Hover me)";
}
