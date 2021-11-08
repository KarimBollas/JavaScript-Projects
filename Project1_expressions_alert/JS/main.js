// var X="Hello, World!",          
//     A="This is a string",
//     B=" Smile, don\'t be shy ",
//     C=" Hey you! ",
//     reds=" Red. ",
//     reds=reds.fontcolor("red");

// C=C+B;
// window.alert(X);
// document.write(X);
// document.write(A);
// document.write(B);
// document.write(C);
// document.write(reds);


function My_First_Function()                                        //Name and Definition
{                                                                   
    var str = "This text is blue!";                                 //Variables defining and assignament
    var result = str.fontcolor("blue");                             // Font color method in string variable
    document.getElementById("Blue_Text").innerHTML = result;        //Putting the value of result into HTML element with "Blue_Text" id
}

function Stay_Away()                                        //Name and Definition
{                                                                   
    var str = "Bad boy!";                                 //Variables defining and assignament
    var result = str.fontcolor("red");                             // Font color method in string variable
    document.getElementById("Bad_Text").innerHTML = result;        //Putting the value of result into HTML element with "Blue_Text" id
}

function Normal()                                        //Name and Definition
{                                                                   
    var str = "Stay Away";                                 //Variables defining and assignament
    var result = str.fontcolor("black");                             // Font color method in string variable
    document.getElementById("Bad_Text").innerHTML = result;        //Putting the value of result into HTML element with "Blue_Text" id
}
