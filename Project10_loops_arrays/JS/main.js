

var i=0;
var Load="=";

function Call_Loop()
{
    
    j=i+10;
    while (i<j)
    {
      
      Load = Load + "=";
      i++;      
      document.getElementById("Loop").innerHTML=i+"%"+Load;

    }
}


function lenght_Method()
{
  var str=document.getElementById("len").value;
  document.getElementById("length_result").innerHTML= "Length: "+str.length;
}


function  for_Method()
{
    var animals=["Elephant","Lion","Cat","Dog","Cow","Parrot"];
    var content="";
    var i;
    for (i=0; i < animals.length; i++)
    {
      content = content+ animals[i]+"<br>";
      console.log(i);
      console.log(animals[i]);
    }
    document.getElementById("for_result").innerHTML=content;
}