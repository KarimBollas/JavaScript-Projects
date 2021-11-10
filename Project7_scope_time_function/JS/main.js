
var health=85;                  //Global variable to health functions 

function addHealth()            // add 1 when click Moore button
{
    var health = 10;            // locasl variable to make an error
    console.log(health);        //log output of health variable 
    health++;
    document.getElementById("health").innerHTML= "Health: " + health;
    
}

function subHealth()                        // add 1 when click Less button
{
    document.getElementById("health").innerHTML= "Health: " + health--;
}

function get_Date()                                 // function date send greeting  
{                                                       
    if (new Date().getHours() < 18 )                //  if it is less than 6 pm
    {
        document.getElementById("Greeting").innerHTML= "How are you today?";
    }    
}

function Today()                                     // function today 
{
    
    if (new Date().getDay()==3)                     // send Miercoles if it is Wednesday 
    {
        document.getElementById("Date").innerHTML="Miercoles";
    } 
    
}

function Rewards()                                             // function rewards
{
    var visits=document.getElementById("visits").value;        //read visits from input
    var reward="Type a valid value";
    if (visits>=1 && visits<=3)                                // compare 1<=visits>=3
    {
        reward="Congrats: 5% discount on this purchase";
    }
    else if (visits>=4 && visits<=6)                           // compare 4<=visits>=6
    {
        reward="Congrats: 30% discount on this purchase";    
    }
    else if (visits>=7)                                         // compare visits>=7
    {
        reward="****Congrats: FREE purchase (up to $50)****";    
    }

    document.getElementById("rewards").innerHTML=reward;       //send won rewards 
        
}