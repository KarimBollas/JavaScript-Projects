
 /* // Classes Difinition

 class Soldier
 {
     string Grado;                 //Attributes
     string Nombre;
     boolean onDuty;
     Soldier(string grado, string nombre)  //Constructor 
     {
         Grado= grado;
         Name = nombre;
         onDuty= true;

     }
 } */
var park=1000;
function Vehicle(make, model, year, color)
{
    this.Vehicle_Make=make;
    this.Vehicle_Model=model;
    this.Vehicle_Year=year;
    this.Vehicle_Color=color;
    
}

var Jack=new Vehicle("Dodge","Viper",2020,"Red");
var Emily=new Vehicle("Jeep","Trail Hawk",2019,"White and Black");
var Erik=new Vehicle("Ford","Pinto",1971,"Mustard");

function myFunction()
{
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year; 
}

function Soldier(rank, name, bullets)
{
    
    this.Soldier_Rank = rank;
    this.Soldier_Name = name;
    this.Soldier_Bullets = bullets;
    
}

var Pepe = new Soldier("Cabo","Pepe",200);

function makeSoldier()
{
    document.getElementById("New_and_This").innerHTML = Pepe.Soldier_Rank +" "+ Pepe.Soldier_Name + " has " + Pepe.Soldier_Bullets + " bullets.";
}



function shootFunction()
{   

    document.getElementById("Nested_Function").innerHTML= "Ammunition park: " + Shoot();
    function Shoot()
    {        
        function Shoot_one()
        {
            park--;
        }
        Shoot_one();
        console.log(park);
        return park;
    }
}


