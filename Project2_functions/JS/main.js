
function Conc()                                        
{                                                                   
    var sentence = document.getElementById("Text").innerHTML; //Get the element Text
    sentence+=" Added";                                       // add to that element the text " Added"   
                                 
    document.getElementById("Text").innerHTML = sentence;     //Returns all concatenated text
}