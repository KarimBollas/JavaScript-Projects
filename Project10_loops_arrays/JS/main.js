

var i=0;                    //global variable for load
var Load="=";

function Call_Loop()
{
    
    j=i+10;
    while (i<j)
    {
      
      Load = Load + "=";                                                 //lopp 10 to 10 
      i++;      
      document.getElementById("Loop").innerHTML=i+"%"+Load;

    }
}


function lenght_Method()
{
  var str=document.getElementById("len").value;                               // length methods for str
  document.getElementById("length_result").innerHTML= "Length: "+str.length;
}


function  for_Method()
{
    var animals=["Elephant","Lion","Cat","Dog","Cow","Parrot"];         // array with animals 
    var content="Animals: ";
    var i;
    for (i=0; i < animals.length; i++)                                // loop to display all array
    {
      content = content+ animals[i]+"<br>";
      console.log(i);                                               // index to console
      console.log(animals[i]);                                      // each animals to console
    }
    document.getElementById("for_result").innerHTML=content;
}

function array_Method()
{
  var unit_status=[];                                       //array example
  unit_status[0]="fighting";
  unit_status[1]="moving";
  unit_status[2]="staying";
  document.getElementById("array").innerHTML="The unit is: " + unit_status[0]+".";

}

function const_Method()
{
  const fox={Class: "Mammalia", Order: "carnivora", Family: "Canidae", Genus: "Culpes", Species: "Vulpes vulpes", Name: "Red Fox" }; // object fox constant 
  fox.Kingdom="Animalia";     // adding attribute
  fox.Order="Other";          // changing attribute
 
  document.getElementById("const_result").innerHTML=fox.Name+" belongs to "+fox.Family +" family.";
  document.getElementById("const2_result").innerHTML="<br> Kingdom: "+fox.Kingdom +" Order: "+fox.Order;
}

function let_Method()
{
  let i=-100;           // local scoope variable with let
  document.getElementById("let_result").innerHTML="Same name variable of loading with let: " + i;   // output with local variable same name that global variable
}
function E_Method()
{
  return Math.E;                        // return example
}
document.getElementById("E_result").innerHTML="E by return: " + E_Method();  // verifying how return works


let m9beretta =             // object with let definition
{
  make: "Beretta",
  model:"M9",
  rounds: 10,
  scoope_ft: 90,
  appear: function()          // method of object
  {
    return "The " + this.model + " model of " + this.make + " has a " + this.scoope_ft +" ft scoope, and capacity for "+ this.rounds + " rounds per magazine." 
  }
}

document.getElementById("object_result").innerHTML=m9beretta.appear(); // calls method of the previous object

function break_Method()
{
  let b= document.getElementById("break").value;    // read the value for break loop 
  let out="";
  for (let i=1; i<=10; i++)       // loop 1-10
  {
    out=out+i+"<br>";           // saving secuence
    if (i==b)break;               // break statement
    
  }
  document.getElementById("break_result").innerHTML= out;  // output all 1...break number
}

function continue_Method()
{
  let b= document.getElementById("con").value;  //read the value for continue
  let out="";
  for (let i=1; i<=10; i++)   // loop 1-10
  {    
    if (i==b)continue;          // next cicle if read value 
    out=out+i+"<br>";     // saving secuence
  }
  document.getElementById("continue_result").innerHTML= out; // output 1...except read value
}