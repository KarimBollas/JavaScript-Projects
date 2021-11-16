function getReceipt() 
{
        // This initializes our string so it can get passed from
        // function to function, growing line by line into a full receipt 
        var text1 = "<h3>You Ordered:</h3>" 
        var runningTotal = 0; 
        var sizeTotal = 0; 
        var sizeArray = document.getElementsByClassName("size");   //get array of size
        for (var i = 0; i < sizeArray.length; i++) 
        { 
            if (sizeArray[i].checked)                       //wich element is checked
            { 
                var selectedSize = sizeArray[i].value;         //store checke element
                text1 = text1 + selectedSize+"<br>";            //add element to String
            }
        }
         // to each size of pizza gives a price
        if (selectedSize === "Personal Pizza")              
        {
            sizeTotal= 6; 
        } 
        else if (selectedSize === "Small Pizza") 
        { 
            sizeTotal= 8;
        }
        else if (selectedSize === "Medium Pizza") 
        { 
            sizeTotal= 10;
        }
        else if (selectedSize === "Large Pizza") 
        { 
            sizeTotal= 14;
        }
        else if (selectedSize === "Extra Large Pizza") 
        { 
            sizeTotal= 16;
        }
        
        runningTotal = sizeTotal;                                   //add cost of size to total
        // data to console simulates receipt
        console.log(selectedSize+" = $"+ sizeTotal+",00");          
        console.log("size text1: " + text1);
        console.log("subtotal: "+ runningTotal + "00");
        
        getTopping(runningTotal,text1); //these variables will get passed on to each function
};

function getTopping (runningTotal, text1)
{
    var toppingTotal =0;
    var selectedTopping =[];
    var toppingArray = document.getElementsByClassName("toppings");     // read all topings array
    for (var j=0; j< toppingArray.length; j++)
    {
        if (toppingArray[j].checked)                                    // wich toping is checked
        {
            selectedTopping.push (toppingArray[j].value);                       // add topping to toppings array
            // add topping to console simulates receipt
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1 +toppingArray[j].value + "<br>";                          //add toppping to output string
        }
    }
    // count selected toppings to calculates de cost of toppings
    var toppingCount = selectedTopping.length;
    if (toppingCount>1)
    {
        toppingTotal = (toppingCount-1);
    }
    else
    {
        toppingTotal =0;
    }

    //calcuates the total with the size cost and the topping cost
    runningTotal=(runningTotal+toppingTotal);

    //displays results
    console.log("total selecte topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping ="+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal+".00"+"</strong></h3>";

}


    