function my_Dictionary()            // Define function Diccionary
{
    var Soldier =                   // Object Soldier as a Dictionary
    {
        Nombre : "Sergio",      
        Apellido : "Perez",
        Matricula: "C-12345678",
        Arma: "Infanteria",
        Grado: "Cabo"
    };
    delete Soldier.Nombre;          // Delete a KVP from soldier
    document.getElementById("Dic").innerHTML= Soldier.Grado + " " + Soldier.Arma + " " + Soldier.Nombre + " " + Soldier.Apellido ;
}

function Text_Reset()               // Reset labels in the HTML
{
    document.getElementById("Dic").innerHTML="Soldier Dictionary";
}
