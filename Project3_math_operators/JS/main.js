var i=0;
var d=9999;

function Add()                                        
{           
    var result=2+3;    
    document.getElementById("Add").innerHTML=" 2+3 = "+result;                                                        
}
function Sub()                                        
{           
    var result=5-2;    
    document.getElementById("Sub").innerHTML=" 5-2 = "+result;                                                        
}
function Mul()                                        
{           
    var result=6*8;    
    document.getElementById("Mul").innerHTML=" 6*8 = "+result;                                                        
}
function Div()                                        
{           
    var result=48/6;    
    document.getElementById("Div").innerHTML=" 48/6 = "+result;                                                        
}
function All()                                        
{           
    var result=(1+2)*10/2-5;    
    document.getElementById("All").innerHTML=" (1+2)*10/2-5 = "+result;                                                        
}
function Mod()                                        
{           
    var result=25%6;    
    document.getElementById("Mod").innerHTML=" When you divide 15 by 6 you have a remainder of: "+result;                                                        
}
function Neg()                                        
{           
    var result=10;    
    document.getElementById("Neg").innerHTML=-result;                                                        
}
function Text_Reset()                                        
{               
    document.getElementById("Add").innerHTML="Addition (Hover me)";
    document.getElementById("Sub").innerHTML="Subtraction (Hover me)";
    document.getElementById("Div").innerHTML="Division (Hover me)";
    document.getElementById("Mul").innerHTML="Multiplication (Hover me)";
    document.getElementById("All").innerHTML="Several (Hover me)";
    document.getElementById("Mod").innerHTML="Modulus (Hover me)";
    document.getElementById("Neg").innerHTML="Negation (Hover me)";
    document.getElementById("Neg").innerHTML="Negation (Hover me)";
}
