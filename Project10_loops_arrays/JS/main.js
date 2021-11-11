

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
    var content="Animals: ";
    var i;
    for (i=0; i < animals.length; i++)
    {
      content = content+ animals[i]+"<br>";
      console.log(i);
      console.log(animals[i]);
    }
    document.getElementById("for_result").innerHTML=content;
}

function array_Method()
{
  var unit_status=[];
  unit_status[0]="fighting";
  unit_status[1]="moving";
  unit_status[2]="staying";
  document.getElementById("array").innerHTML="The unit is: " + unit_status[0]+".";

}

function const_Method()
{
  const fox={Class: "Mammalia", Order: "carnivora", Family: "Canidae", Genus: "Culpes", Species: "Vulpes vulpes", Name: "Red Fox" };
  fox.Kingdom="Animalia";
  fox.Order="Other";
  document.getElementById("const_result").innerHTML=fox.Name+" belongs to "+fox.Family +" family.";
  document.getElementById("const2_result").innerHTML="<br> Kingdom: "+fox.Kingdom +" Order: "+fox.Order;
}