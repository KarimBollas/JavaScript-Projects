function Vote()            // Define function Coercion
{
    var Age, canVote;
    Age= document.getElementById("Age").value;
    canVote = (Age < 18) ? "You are too young":"You are old eneough";
    document.getElementById("Vote").innerHTML= canVote + " to vote.";
}

