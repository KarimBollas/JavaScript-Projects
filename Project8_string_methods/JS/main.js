var sentence="Once upon a midnight dreary, while I pondered, weak and weary..."; // global sentence

function concat_Method()                                        // Define concat function to concat these esentences
{
    var part1="And this was the reason that, long ago, "
    var part2= "In this kingdom by the sea, "
    var wSentence="Sentence: ";
    wSentence = wSentence.concat(part1, part2);
    document.getElementById("concat_result").innerHTML=wSentence;       // return the sentence
}



function slice_Method()
{   
    var section=sentence.slice(29,64);                      // slice the global sentence
    document.getElementById("slice").innerHTML=section;        // return slice
}
function upper_Method()
{       
    document.getElementById("upper").innerHTML=sentence.toUpperCase();  // uppercase the global sentence
}
function lower_Method()
{       
    document.getElementById("lower").innerHTML=sentence.toLowerCase(); // lowercase the global sentence
}
function search_Method()
{   
    var pos=-1;                                         // local variable to position the search result 
    var output= "Not found";                            // output
    var word=document.getElementById("search").value;   // word read the input to search
    pos= sentence.search(word);                         // search 
    if (pos>=0)                                         // validate if found
    {
        output=word + " is at position: "+ pos;         // position
    }

    document.getElementById("search_result").innerHTML=output;  // send position or message not foud
}

function toString_Method()
{
    var num=document.getElementById("toString").value;  // read the input
    var output= "Type a number";                        // error in case not a number
    if (!isNaN(num))                                    //validate is a number
    {
        output=num.toString();                          //to string
    }

    document.getElementById("toString_result").innerHTML=output;// send the string or error message
}

function prec_Method()
{
    var X=112233.445566778899;                          //local number
    var prec=document.getElementById("prec").value;     //read precision input
    var output= "Type a number";                        //error in case npt a number
    if (!isNaN(prec))                                   //is number?
    {   
        output=X.toPrecision(prec);                     // performs toPrecision
    }

    document.getElementById("prec_result").innerHTML=output; // send results
}

function toFixed_Method()
{
    var X=5.56789;                                          //local number
    var fix=document.getElementById("toFixed").value;   //read fix input
    var output= "Type a number";                        // error in case fix not a number
    if (!isNaN(fix))                                    //is fix a  number?
    {
        output=X.toPrecision(fix);                      //performs tofixed
    }

    document.getElementById("toFixed_result").innerHTML=output;  //send results
}


function valueOf_Method()           
{   
    var str=document.getElementById("valueOf").value;               //read input
    output=str.valueOf();                                           //performs valueof
    document.getElementById("valueOf_result").innerHTML=output;      //sends results
}


