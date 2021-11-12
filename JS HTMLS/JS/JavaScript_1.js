function switchFunction()
{
    
    let animals=document.getElementById("animal").value;
    let animal_str=" Mismatch.";
    switch(animals)
    {
        case "Elephant": 
            animal_str=" has a great memory.";
        break;
        case "Frog": 
            animal_str=" has protruding eyes.";
        break;
        case "Dog": 
            animal_str=" is human best friend.";
        break;
        default:
            animal_str+=" Entr exactly as written above.";
                        
        
    }
    document.getElementById("switch_result").innerHTML=animals+ animal_str;
    
}


function get_Animals() 
{
    var animals=document.getElementsByClassName("animals");    
    animals[1].innerHTML="Animal XX";
    
}


let img = document.getElementById("imagen");
let ctx=img.getContext("2d");
let grd;
ctx.beginPath();
ctx.arc(375,240,240,0,2*Math.PI);
ctx.stroke();

grd=ctx.createRadialGradient(375,240,10,380,250,240);
grd.addColorStop(0, 'DarkCyan');
grd.addColorStop(0.9, 'GhostWhite');

ctx.fillStyle = grd;
ctx.fillRect(0,0, 720, 480);