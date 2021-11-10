
var health=85;

function addHealth()
{
    var health = 10;
    console.log(health);
    health++;
    document.getElementById("health").innerHTML= "Health: " + health;
    
}

function subHealth()
{
    document.getElementById("health").innerHTML= "Health: " + health--;
}

function get_Date()
{
    if (new Date().getHours() < 18 )
    {
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }    
}

function Today()
{
    
    if (new Date().getDay()==2)
    {
        document.getElementById("Date").innerHTML="Martes";
    } 
    
}

